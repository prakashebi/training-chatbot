import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

const chat = () => {

const client = new BedrockRuntimeClient({region: "us-west-2"});

const modelId = "meta.llama3-1-8b-instruct-v1:0";

const userMessage = "What is metagenomics'";
const conversation = [
  {
    role: "user",
    content: [{ text: userMessage }],
  },
];

const response = await client.send(
  new ConverseCommand({ modelId, messages: conversation }),
);

const responseText = response.output.message.content[0].text;
console.log(responseText);
}

export default chat
