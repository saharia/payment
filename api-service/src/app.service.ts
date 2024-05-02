import { FileUploadInput } from '@brightauto/api-models';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { assign, reject } from 'lodash';
import { lastValueFrom } from 'rxjs';
import { v4 } from 'uuid';

@Injectable()
export class AppService {

  @Inject('NAT_SERVICE')
  protected readonly client: ClientProxy;
  
  constructor(private configService: ConfigService) {}

  getHello(): string {
    return 'Hello World Api!';
  }

  async sendFile(stream: any, filename: string) {
    try {
      return await this.streamFileToService(stream, filename);
    } catch (error) {
      throw error;
    }
  }

  streamFileToService(stream: any, filename: string) {
    return new Promise((resolve, reject) => {
      const chunkSize = this.configService.get<number>('maxChunkSize');
      const payload: FileUploadInput = new FileUploadInput();
      payload.sequence = 1;
      payload.id = v4();
      payload.name = filename;
      stream.on("data", async (chunk) => {
        stream.pause();
        const chunks = [];
        if (
          chunk instanceof Buffer &&
          chunkSize> 0 &&
          chunk.length > chunkSize
        ) {
          let len = chunk.length;
          let i = 0;
          while (i < len) {
            chunks.push(chunk.slice(i, (i += chunkSize)));
          }
        } else {
          chunks.push(chunk);
        }
        try {
          
          for (const ch of chunks) {
            console.debug(
              `=> Send stream chunk node. :`
            );
            const copy = assign({}, payload);
            copy.sequence = ++payload.sequence;
            copy.stream = true;
            copy.file = ch;
            console.debug(
              `=> Send stream chunk node. Seq: ${copy.sequence}`
            );
    
            /* console.debug(
              `=> Send stream chunk ${requestID}to ${nodeName} node. Seq: ${copy.seq}`
            );
    
            this.publish(new Packet(P.PACKET_REQUEST, ctx.nodeID, copy)).catch(
              publishCatch
            ); */
    
            const response = await lastValueFrom(this.client.send('category.fileUpload', { payload: copy }));
            console.log(response);
          }
          stream.resume();
          // return resolve({ success: true, message: "File upload successfully" });
        } catch (error) {
          console.log(error);
          return reject({ success: false, message: error.message || "File upload falied!" });
        }
        return;
      });
  
      stream.on("end", async() => {
        const copy = assign({}, payload);
        copy.sequence = ++payload.sequence;
        copy.file = null;
        copy.stream = false;
        copy.isEnd = true;
  
        /* this.logger.debug(
          `=> Send stream closing ${requestID}to ${nodeName} node. Seq: ${copy.seq}`
        );
  
        return this.publish(new Packet(P.PACKET_REQUEST, ctx.nodeID, copy)).catch(
          publishCatch
        ); */
        const response = await lastValueFrom(this.client.send('category.fileUpload', { payload: copy }));
        resolve({ success: true, message: "File uploaded" });
      });
  
      stream.on("error", async(err) => {
        const copy = Object.assign({}, payload);
        copy.sequence = ++payload.sequence;
        copy.stream = false;
        copy.error = err.message;
        copy.file = null;
  
        const response = await lastValueFrom(this.client.send('category.fileUpload', { payload: copy }));
        reject({ success: false, message: err.message });

        /* this.logger.debug(
          `=> Send stream error ${requestID}to ${nodeName} node.`,
          copy.meta["$streamError"]
        );
  
        return this.publish(new Packet(P.PACKET_REQUEST, ctx.nodeID, copy)).catch(
          publishCatch
        ); */
      });
    })
  }

}
