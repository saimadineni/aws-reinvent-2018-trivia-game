#!/usr/bin/env node
import cdk = require('@aws-cdk/cdk');
import { StaticSite } from './static-site';

interface TriviaGameInfrastructureStackProps extends cdk.StackProps {
    domainName: string;
    siteSubDomain: string;
}

class TriviaGameInfrastructureStack extends cdk.Stack {
    constructor(parent: cdk.App, name: string, props: TriviaGameInfrastructureStackProps) {
        super(parent, name, props);

        new StaticSite(this, 'StaticSite', {
            domainName: props.domainName,
            siteSubDomain: props.siteSubDomain
        });
   }
}

const app = new cdk.App();
new TriviaGameInfrastructureStack(app, 'TriviaGameStaticSiteInfraTest', {
    domainName: 'aws-cloudlab.org',
    siteSubDomain: 'test'
});
new TriviaGameInfrastructureStack(app, 'TriviaGameStaticSiteInfraProd', {
    domainName: 'aws-cloudlab.org', 
    siteSubDomain: 'www'
});
app.run();