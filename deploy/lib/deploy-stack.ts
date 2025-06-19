import * as cdk from "aws-cdk-lib";
import {
    CodePipeline,
    CodePipelineSource,
    ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DeployStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new CodePipeline(this, "CodePipeline", {
            pipelineName: "MyPipeline",
            synth: new ShellStep("Synth", {
                input: CodePipelineSource.gitHub(
                    "dev-ashishpal/QUIZ-APP-playpower",
                    "main",
                    {
                        authentication:
                            cdk.SecretValue.secretsManager("github-token"),
                    }
                ),
                commands: ["npm ci", "npm run build", "npx cdk synth"],
            }),
        });
    }
}
