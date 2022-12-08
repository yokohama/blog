import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BlogStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const rds = new cdk.aws_lightsail.CfnDatabase(this, 'blogDatabase', {
      masterDatabaseName: '',
      masterUsername: '',
      relationalDatabaseBlueprintId: 'mysql_8_0',
      relationalDatabaseBundleId: 'micro_2_0',
      relationalDatabaseName: 'blog',
    });
  }
}
