import "@tsed/swagger";
import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import {config} from "./config/index";
import * as rest from "./controllers/rest/index";

@Configuration({
  acceptMimes: ["application/json"], //Configure the mimes accepted by default for each request by the server
  httpPort: process.env.PORT || 3000, //Port number for the HTTP.Server
  httpsPort: false, // Port number for the HTTPs.Server 
  mount: {  //Mount all given controllers and map controllers to the corresponding endpoints.
    "/rest": [
      ...Object.values(rest)
    ]
  },
  exclude: [  //Exclude all files that match with this list when the Server scans all components with the mount or scanComponents
    "**/*.spec.ts"
  ],
  swagger: [  //adding swagger
    {
      path: "/docs"
    }
  ]
})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  @Configuration()
  protected settings: Configuration;
}
