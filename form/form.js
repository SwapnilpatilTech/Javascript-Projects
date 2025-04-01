let identity = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let con_password = document.getElementById("con_password");
const btn = document.getElementById("btn");
let error = document.getElementById("error");

let result = true;

btn.addEventListener("click", () => {
  space_validation();

  if (result == false) {
    alert("Every section must be filled");
  } else {
    name_validation(identity.value);

    if (state == false) {
      alert("Numbers and special characters are not allowed !");
    } else {
      email_validation(email.value);

      if (state == false) {
        alert("Caplock letters are not allowed and @gmail.com is required");
      } else {
        password_validation(password.value, con_password.value);

        if (state == false) {
          alert(
            "Password should have number, special characters!"
          );
        } else {
          alert("Signup sucessfully");
        }
      }
    }
  }
});

function space_validation() {
  if (
    identity.value == "" ||
    email.value == "" ||
    password.value == "" ||
    con_password.value == ""
  ) {
    state = false;
  } else {
    state = true;
  }
}

function name_validation(name) {
  if (/[1,2,3,4,5,6,7,8,9,0]/.test(name) || /[@#$%&*-+]/.test(name)) {
    state = false;
  } else {
    state = true;
  }
}

function email_validation(eml) {
  let extension = "@gmail.com";
  if (/[A-Z]/.test(eml) || !eml.includes(extension)) {
    state = false;
  } else {
    state = true;
  }
}

function password_validation(psrd, con_psrd) {
  if (/[0,1,2,3,4,56,7,8,9]/.test(psrd) && /[!@#$%&*-+]/.test(psrd) && psrd === con_psrd) {
    state = true;
  } else {
    state = false;
  }
}
