# NX
 There are few commands that are crucial to start development and contribute to repo.
  
  ### npx nx run [app]:[action]
  - This will run specific package with specific action, for example ``npx nx run front:build``
  All actions to perform are defined in each ``project.json`` file which is dedicated for each package. Actions are in `targets` object.

  ### npx nx affected --target=[action]
  - There is an option to run action the other way around, by passing only action and allow NX detect where it should run job based on affected packages.
  Example: ``npx nx affected --target=lint --parallel=3`` This job wil automatically go through all affected packages and do lint job

---

# VERCEL
  Vercel is used for packages deployment.

 ### Vercel Link
  - Unfortunately vercel isn't smart enough to deploy only affected packages, even in parallel. To deploy specific package manually
    we have to change the pointer that tells us which package has to be deployed. We're doing this by: `vercel link` in terminal.

### Vercel Deploy
  - When we already did `vercel link` command we're ready to do `vercel deploy` with updated pointer

### Automatic Deployment
- Currently project is implement to not generate vercel preview of all on each commit to PR. It's blocked by `script.sh` script stored in repo.
  This script is added to Vercel via website in `Project Settings` --> `Git` --> `Ignored Build Step`. Nevertheless we decided to do deploys only on:
  - Develop branch merge(when we merge PR to dev branch)
  - Staging branch merge(same as above)
  - Main branch(only manually in vercel website)
- Alsothere is a job in github workflows called `preview.yml` which triggers to `bug` label on github, then it will create a preview for any kind of PR.
  However, it's not work perfect 'cause it runs only one of the project on vercel, that means we can't run this workflow against multiple packages.
