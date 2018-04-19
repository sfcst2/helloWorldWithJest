This was  my hello wold application generated with angular/cli 6.0.0-rc.5.  I then used the jest-preset-angular, @types/jest, and the jest packages to run tests.

To run:
  npm run jesttest

  or 

  npm run jesttest:watch

  Jest uses snapshots to compare what the components should look like. You can generate a snapshot by doing .toMatchSnapshot().  This will automatically create a snapshot for you.  Snapshots should be baselined.

  