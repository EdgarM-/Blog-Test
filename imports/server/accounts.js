import { Accounts } from "meteor/accounts-base";

Accounts.onCreateUser((options, user) =>{
    user.role = [options.profile.role];
    console.log(user);
    return user;
})