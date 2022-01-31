
const yourAccountItems = {
    headingDiv: {
        heading: "Your Account",
        info: "See information about your account, download an archive of your data, or learn about your account deactivation options"
    },
    detailsItem: {
        items: [
            {
                icon: "<i class=\"fal fa-user-alt\"></i>",
                head: "Account Information",
                info: "See your account information like your phone number and email address"
            },
            {
                icon: "<i class=\"fal fa-key\"></i>",
                head: "Change your Password",
                info: "Change your password at any time."
            },
            {
                icon: "<i class=\"fal fa-download\"></i>",
                head: "Download an archive of your data",
                info: "Get insights into the type of information stored for your account."
            },
            {
                icon: "<i class=\"fal fa-user-friends\"></i>",
                head: "TweetDeck Teams",
                info: "Invite anyone to Tweet from this account using the Teams feature in TweetDeck."
            },
            {
                icon: "<i class=\"far fa-heart-broken\"></i>",
                head: "Deactivate your account",
                info: "Find out how you can deactive your account."
            },
        ]
    }
};

const securityAndAccountAccessObject = {
    headingDiv: {
        heading: "Security and account access",
        info: "Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account."
    },
    detailsItem: {
        items: [
            {
                icon: "<i class=\"fal fa-lock-alt\"></i>",
                head: "Security",
                info: "Manage your account's setting"
            },
            {
                icon: "<i class=\"fal fa-copy\"></i>",
                head: "Apps and sessions",
                info: "See information about when you logged into your account and the apps you connected to your account"
            },
            {
                icon: "<i class=\"fal fa-exchange\"></i>",
                head: "Connected accounts",
                info: "Manage Google or Apple accounts connected to Twitter to log in."
            },
        ]
    }
};
export {yourAccountItems,securityAndAccountAccessObject};
// module.exports.yourAccountItems = yourAccountItems;
// module.exports.securityAndAccountAccessObject = securityAndAccountAccessObject;