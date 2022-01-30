// import {securityAndAccountAccessObject} from "./data.js"
// import {yourAccountItems} from "./data.js"

function addState(path) {
    let stateObj = { id: 100 };
    window.history.pushState(stateObj, `${path}`, `/${path}`);
  }
  
  // home_page_container_setting
  const homePageContainerSettings = document.getElementsByClassName(
    "home_page_container__setting"
  );
  const settingItems =
    homePageContainerSettings[0].getElementsByClassName("setting_item");
  const homePagesidebarContainer = document.querySelector(
    ".home_page_container__sidebar"
  );
  
  
  var containerPreview = document.querySelector(".home_page_container__details");
  var hr = document.createElement("hr");
  var br = document.createElement("br");
  
  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile_container");
  profileContainer.innerHTML = createProfileDiv("Akash Chand", "@skyline8393");
  console.log(profileContainer);
  console.log(homePagesidebarContainer);
  homePagesidebarContainer.appendChild(profileContainer);
  
  window.addEventListener('click', function(e){
      const element = this.document.querySelector(".profile_pop_up");
      console.log(e);
      console.log(e.target);
      if(element!=null && profileContainer.contains(e.target)){
          
          console.log(element)
      }else{
          if(element!=null)
          profileContainer.removeChild(element)
      }
  })
  
  
  var yourAccountItems = {
    headingDiv: {
      heading: "Your Account",
      info: "See information about your account, download an archive of your data, or learn about your account deactivation options",
    },
    detailsItem: {
      items: [
        {
          icon: `<i class="fal fa-user-alt"></i>`,
          head: "Account Information",
          info: "See your account information like your phone number and email address",
        },
        {
          icon: `<i class="fal fa-key"></i>`,
          head: "Change your Password",
          info: "Change your password at any time.",
        },
        {
          icon: `<i class="fal fa-download"></i>`,
          head: "Download an archive of your data",
          info: "Get insights into the type of information stored for your account.",
        },
        {
          icon: `<i class="fal fa-user-friends"></i>`,
          head: "TweetDeck Teams",
          info: "Invite anyone to Tweet from this account using the Teams feature in TweetDeck.",
        },
        {
          icon: `<i class="far fa-heart-broken"></i>`,
          head: "Deactivate your account",
          info: "Find out how you can deactive your account.",
        },
      ],
    },
  };
  
  var securityAndAccountAccessObject = {
    headingDiv: {
      heading: "Security and account access",
      info: "Manage your account’s security and keep track of your account’s usage including apps that you have connected to your account.",
    },
    detailsItem: {
      items: [
        {
          icon: `<i class="fal fa-lock-alt"></i>`,
          head: "Security",
          info: "Manage your account's setting",
        },
        {
          icon: `<i class="fal fa-copy"></i>`,
          head: "Apps and sessions",
          info: "See information about when you logged into your account and the apps you connected to your account",
        },
        {
          icon: `<i class="fal fa-exchange"></i>`,
          head: "Connected accounts",
          info: "Manage Google or Apple accounts connected to Twitter to log in.",
        },
      ],
    },
  };
  for (let i = 0; i < settingItems.length; i++) {
    settingItems[i].addEventListener("click", function () {
      const current = document.querySelector(".setting_item.isActive");
      current.classList.remove("isActive");
      settingItems[i].classList.add("isActive");
      const text = settingItems[i].getElementsByTagName("p")[0].textContent;
      if (text == "Your account") {
        addYourAccount();
      } else if (text == "Security and account access") {
        addSecurityAndAccountAccess();
      }
    });
  }
  
  function moveToPreviousSection() {
    console.log("back btn pressed");
    const current = document.querySelector(".setting_item.isActive");
    const text = current.getElementsByTagName("p")[0].textContent;
    if (text == "Your account") {
      addYourAccount();
    }
  }
  
  function addListnersToItems(detailsItems) {
    for (let i = 0; i < detailsItems.length; i++) {
      detailsItems[i].addEventListener("click", function () {
        var current = document.querySelector(".details_item.isActive");
        if (current !== null) current.classList.remove("isActive");
  
        detailsItems[i].classList.add("isActive");
        const text = detailsItems[i].getElementsByTagName("p")[0].textContent;
        console.log(text);
        if (text == "Account Information") {
          addYourAccountInformation();
        } else if (text == "Change your Password") {
          addChangeYourPassword();
        } else if (text == "Security and account access") {
          addSecurityAndAccountAccess();
        }
      });
    }
  }
  
  function Logout(){
      window.location.href = 'http://twitter.com';
  }
  function openProfilePopUp() {
    profileContainer.classList.add("isActive");
    console.log(profileContainer);
    profileContainer.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="profile_pop_up">
      <div class="header">
          <div class="profile_box">
              <i class="fas fa-user-circle"></i>
                  <span>
                      <h5>Akash Chand</h5>
                      <h6>@skyline8393</h6>
                  </span>
              <i class="fal fa-check"></i>
          </div>
          <br>
          <hr>
          <div class="profile_text">
              <p>Add an existing account</p>
          </div>
          <div class="profile_text" onclick="Logout()">
              <p>Log out @skyline8393</p>
          </div>
      </div>
      </div>
      `
    );
  }
  
  
  function createProfileDiv(name, handle) {
    return `
      <div class="profile_box " onclick="openProfilePopUp()">
      <i class="fas fa-user-circle"></i>
      <span>
          <h5>${name}</h5>
          <h6>${handle}</h6>
      </span>
      <i class="fal fa-ellipsis-h"></i>
  </div>`;
  }
  function addYourAccountInformation() {
    addState("setting/your_twitter_data/account");
    containerPreview.innerHTML = "";
    const yourAccountInforamtionDiv = document.createElement("div");
    yourAccountInforamtionDiv.classList.add("container");
    yourAccountInforamtionDiv.classList.add("account_information");
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header2_with_back_btn");
    headerDiv.innerHTML = createHeaderWithBackBtn("Account Information");
    yourAccountInforamtionDiv.appendChild(headerDiv);
  
    const boldInfoDiv = document.createElement("div");
    boldInfoDiv.classList.add("bold_info");
    boldInfoDiv.innerHTML = createBoldInfoDiv("Confirm your password");
    yourAccountInforamtionDiv.appendChild(boldInfoDiv);
  
    const miniInfoDiv = document.createElement("div");
    miniInfoDiv.classList.add("mini_info");
    miniInfoDiv.innerHTML = createMiniInfoDiv(
      " Please enter your password in order to get this."
    );
    yourAccountInforamtionDiv.appendChild(miniInfoDiv);
  
    const inputBoxDiv = document.createElement("div");
    inputBoxDiv.classList.add("input_box");
    inputBoxDiv.innerHTML = createInputElement(
      "password",
      "password",
      "password",
      "password"
    );
    yourAccountInforamtionDiv.appendChild(inputBoxDiv);
  
    const miniBlueInfoDiv = document.createElement("div");
    miniBlueInfoDiv.classList.add("mini_info_blue");
    miniBlueInfoDiv.innerHTML = createMiniBlueInfoDiv("Forgot password ?");
    yourAccountInforamtionDiv.appendChild(miniBlueInfoDiv);
  
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn_container");
    buttonDiv.innerHTML = createBlueButton("confirm");
    yourAccountInforamtionDiv.appendChild(buttonDiv);
  
    containerPreview.appendChild(yourAccountInforamtionDiv);
  
  }
  function addChangeYourPassword() {
    addState("setting/password");
    containerPreview.innerHTML = "";
    const changeYourPasswordDiv = document.createElement("div");
    changeYourPasswordDiv.classList.add("container");
    changeYourPasswordDiv.classList.add("setting");
  
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header2_with_back_btn");
    headerDiv.innerHTML = createHeaderWithBackBtn("Change your password");
    changeYourPasswordDiv.appendChild(headerDiv);
  
    const inputBoxDiv1 = document.createElement("div");
    inputBoxDiv1.classList.add("input_box");
    inputBoxDiv1.innerHTML = createInputElement(
      "text",
      "currentPassword",
      "currentPassword",
      "Current password"
    );
    changeYourPasswordDiv.appendChild(inputBoxDiv1);
  
    const miniBlueInfoDiv = document.createElement("div");
    miniBlueInfoDiv.classList.add("mini_info_blue");
    miniBlueInfoDiv.innerHTML = createMiniBlueInfoDiv("Forgot password ?");
    changeYourPasswordDiv.appendChild(miniBlueInfoDiv);
  
    // changeYourPasswordDiv.appendChild(hr);
    changeYourPasswordDiv.appendChild(br);
  
    const inputBoxDiv2 = document.createElement("div");
    inputBoxDiv2.classList.add("input_box");
    inputBoxDiv2.innerHTML = createInputElement(
      "password",
      "newPassword",
      "newPassword",
      "New password"
    );
    changeYourPasswordDiv.appendChild(inputBoxDiv2);
    changeYourPasswordDiv.appendChild(br);
  
    const inputBoxDiv3 = document.createElement("div");
    inputBoxDiv3.classList.add("input_box");
    inputBoxDiv3.innerHTML = createInputElement(
      "password",
      "confirmPassword",
      "confirmPassword",
      "Confirm password"
    );
    changeYourPasswordDiv.appendChild(inputBoxDiv3);
    changeYourPasswordDiv.appendChild(br);
    changeYourPasswordDiv.appendChild(br);
  
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("btn_container");
    buttonDiv.innerHTML = createBlueButton("Save");
    changeYourPasswordDiv.appendChild(buttonDiv);
  
    containerPreview.appendChild(changeYourPasswordDiv);
  }
  function createHeaderDiv({ heading, info }) {
    return `<h2>${heading}</h2>
      <span class="mini_info">
          ${info}
      </span>`;
  }
  
  function createDetailsItem({ icon, head, info }) {
    return `
      <div class="container__icon_and_info">
          <div class="details_icon">
              ${icon}
          </div>
          <div class="head_and_info">
              <p>${head}</p>
              <span class="mini_info">${info}</span>
          </div>
      </div>
      <i class="far fa-chevron-right"></i>
      `;
  }
  
  function createHeaderWithBackBtn(headerText) {
    return `<div class="back_btn" onclick = "moveToPreviousSection()">
      <i class="fad fa-arrow-circle-left"></i>
  </div>
  <div class="header_text">
      <h2>${headerText}</h2>
  </div>`;
  }
  
  function createMiniInfoDiv(miniInfo) {
    return `<p>${miniInfo}</p>`;
  }
  function createMiniBlueInfoDiv(miniInfo) {
    return `<p>${miniInfo}</p>`;
  }
  function createBoldInfoDiv(boldInfo) {
    return `<h1>${boldInfo}</h1>`;
  }
  
  function createInputElement(type, name, id, placeholder) {
    return `<input type="${type}" name="${name}" id="${id}" placeholder="${placeholder}" required />`;
  }
  
  function createBlueButton(text) {
    return `<button class="blue_btn">
      ${text}
  </button>`;
  }
  
  function addYourAccount() {
    addState("setting/account");
    const {
      headingDiv,
      detailsItem: { items },
    } = yourAccountItems;
    containerPreview.innerHTML = "";
  
    const yourAccountDiv = document.createElement("div");
    yourAccountDiv.className = "your_account";
    yourAccountDiv.classList.add("isActive");
  
    const detailsHeadingDiv = document.createElement("div");
    detailsHeadingDiv.classList.add("details_heading");
    detailsHeadingDiv.innerHTML = createHeaderDiv(headingDiv);
    yourAccountDiv.appendChild(detailsHeadingDiv);
  
    for (let item of items) {
      const accountItem = document.createElement("div");
      accountItem.classList.add("details_item");
      accountItem.innerHTML = createDetailsItem(item);
      yourAccountDiv.appendChild(accountItem);
    }
  
    containerPreview.appendChild(yourAccountDiv);
  
    const detailsItems = containerPreview.getElementsByClassName("details_item");
    addListnersToItems(detailsItems);
  }
  
  function addSecurityAndAccountAccess() {
    addState("setting/security_and_account_access");
    const {
      headingDiv,
      detailsItem: { items },
    } = securityAndAccountAccessObject;
  
    const containerPreview = document.querySelector(
      ".home_page_container__details"
    );
    containerPreview.innerHTML = "";
  
    const yourAccountDiv = document.createElement("div");
    yourAccountDiv.className = "your_account";
    yourAccountDiv.classList.add("isActive");
  
    const detailsHeadingDiv = document.createElement("div");
    detailsHeadingDiv.classList.add("details_heading");
    detailsHeadingDiv.innerHTML = createHeaderDiv(headingDiv);
    yourAccountDiv.appendChild(detailsHeadingDiv);
  
    for (let item of items) {
      const accountItem = document.createElement("div");
      accountItem.classList.add("details_item");
      accountItem.innerHTML = createDetailsItem(item);
      yourAccountDiv.appendChild(accountItem);
    }
  
    containerPreview.appendChild(yourAccountDiv);
    console.log(containerPreview);
  }

  addYourAccount();
  