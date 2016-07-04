# MyGov Widget Information Only Sample Base

A sample **information only** widget for myGov-core-client runtime.  As a Service Provider choose this widget if you need just a simple read-only widget.

## Process Overview

 A Service Provider may clone this repo, makes changes, and push it into thier own repo.  Once complete the myGov-core-client is modified to include this widget.

## Cloning/Forking Instructions

Either clone this repository or fork it on BitBucket/Github then clone your fork.  You should also rename it replacing myorg and myservice with appropriate values.

    git clone git@bitbucket.org:GregTurner/mygov-widget-info-base.git myGov-widget-myorg-myservice

Sign-up and/or create a repo in BitBucket/Github using their web site.  If you want to not open source your code, use a private repository.  BitBucket gives you some for free.

- [https://bitbucket.org/](https://bitbucket.org/)
- [https://github.com/](https://github.com/)

TODO: link to guides on Github.  You MUST read the guide about using public repositories.

*If your new to git repos on the internet, SSH is the preferred authentication method.*

We don't want you modifying our sample widget repo.  The next step is to change the origin of your cloned widget so that you can work on your own or as a team.

	cd myGov-widget-myorg-myservice
	git remote set-url origin git@bitbucket.org:<yourusername>/mygov-widget-myorg-myservice.git

Push your local changes to the remote repo in BitBucket/Github

	git push -u origin --all

You should see your new sample widget appear in the BitBuckets/Github web site.

## Updating your README.md and package.json

Your sample comes with these instructions, but we need to change this README.md to something more appropriate.

Update the package.json file with appropriate values.

## Configuring your AngularJS module

AngularJS modules MUST have unique names to ensure we don't get errors trying to load your module.

Change the AngularJS module name in `index.js`:

	const widgetModule = angular.module('mygov.widget.myorg.myservice', [])

Change the AngularJS state, i.e., how myGov navigates to your module:

	$stateProvider
      .state('myorgmyservice', {
        url: '/myorg/myservice',
        template: '<myorgmyservice></myorgmyservice>'
      })

## Defining instance-specific module configruations variables

The behavior of a module often needs to vary from instance to instance. For instance,

* a RESTful service url end point may differ from dev to prod,
* you may want to enable debug only on non-prod instances
* you may want to define a "secret" variable that is not published in source code but available to a runtime instance

`myGov` supports two ways to define instance-specific module configuration variables

1. Use `appConstants.runtimeEnv` to differentiate instance by environments: development, test, or production. `appConstants` is
   defined in core module so your module has to add a dependency to it:

         const widgetModule = angular.module('mygov.widget.myorg.myservice', [require("_appRoot/core/core.module").name])

     Usage example:

         const widgetModule = angular.module('mygov.widget.myorg.myservice',
         [require("_appRoot/core/core.module").name])
         .component('myComponent', {
         templateUrl: require('./index.html'),
         controller: function (appConstants) {
          'ngInject'
          if(appConstants.runtimeEnv === 'production'){
           // do something just for production environment
          }
         }
         });
     The advantage using this method is everything is under your control. The disadvantages, however, are:

     1. you have to publish the variables, so it's unsuitable for "secrets".
     2. there is no one-to-one mapping of runtimeEnv to instance so the method is only an approximation.

2. Ask `mygov-core-client` maintainer to add your config variable, say `myWidgetSecret`, to appConstants section of local.js file of an instance. You can then reference it by `appConstants.myWidgetSecret`. Your module still needs to reference the core.module as shown in method 1. Because `local.js` is not published, you can define more confidential data. A word of warning however, the variable is only uglified/minified not encrypted. So don't expect end user cannot decode it.


## Testing it out

Clone the [myGov-core-client](https://bitbucket.org/fredwen/mygov-core-client) and [myGov-core-server](https://bitbucket.org/fredwen/mygov-core-server). And follow instructions in the README.md to install your new widget, build and run your very own MyGov site.

## Future Considerations

The above process can be stream-lined to make it easier for widget developers.  Here's some considerations for enhancement:

1. Provide a sample README.md file to fill out
2. Provide a web UI to automatically create a repo for the logged in user.
2. Using a Node.JS CLI to configure the new widget or have a script from the web UI do this step.
3. Provide a cloud SaaS IDE for developers.
4. Provide a OpenShift template for creating the MyGov environment. Do this automatically via web UI.
