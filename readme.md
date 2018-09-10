## Wang's task

#### Technology used in this task:

1. Host on aws with LAMBDA + APIGATEWAY, as no data stored need, no dynamodb used here
2. Serverless Framwork used to deploy my node which was writen in node.js
3. A restful Structure to wrtie the code, follow the restful api design rules.

---

1. Link: https://vqkclmtsk7.execute-api.ap-southeast-2.amazonaws.com/dev/hometrack/sample
2. TYPE: POST
3. BODY: https://github.com/Hometrack/codetest/blob/master/hometrack-sample-request.json
4. Note: As the desction of the validation from the task is simple, I add my own rule for this, These rules are: 

1. should be a valid JSON post object
2. should be a valid JSON object array
3. should have the needed JSON properties (such as buildingNumber, street, suburb ect) 
4. Others will be regard as a invalid post body and return 400 as required
