// -------------Account details-------------
class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
            1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 2500 },
            1003: { name: "user3", acno: 1003, pin: 4895, password: "userthree", balance: 5000 },
            1004: { name: "user4", acno: 1004, pin: 2589, password: "userfour", balance: 8900 },
            1005: { name: "user5", acno: 1005, pin: 2555, password: "userfive", balance: 10000 },
        }
        return accountDetails
    }
    //----------Account login----------  
    static login() {
        var acno = document.querySelector("#acno").value;
        var password = document.querySelector("#pwd").value;
        try {
            if (isNaN(acno)) throw "Not a valid account Number";
        }
        catch (err) {
            alert(err)
        }
        let data = Bank.getAccountDetails()
        if (acno in data) {
            let pwd = data[acno].password
            if (pwd == password) {
                alert("Successfull login");
                window.open("userhome.html");
            }
            else {
                alert("Incorrect Username or Password")
            }
        }
        else {
            alert("User doesnot exist")
        }
    }
    // ------------------user deposit/credit---------------
    static deposit() {
        var accnum = document.querySelector("#acno").value;
        var pinnum = document.querySelector("#pin").value;
        var amount = Number(document.querySelector("#amt").value);
        var data = Bank.getAccountDetails();
        if (accnum in data) {
            let mpin = data[accnum].pin;
            if (pinnum == mpin) {
                data[accnum].balance += amount;
                alert("Account has been credited");
                alert(data[accnum].balance);
            }
            else {
                alert("Incorrect accountnumber or Pin")
            }
        }
    }
    // ----------------user withdraw/debit-----------------
    static withdraw() {
        var wacno = document.querySelector("#wacno").value;
        var wpin = document.querySelector("#wpin").value;
        var wamt = Number(document.querySelector("#wamt").value);
        var data = Bank.getAccountDetails()
        if (wacno in data) {
            var mpin = data[wacno].pin
            if (wpin == mpin) {
                data[wacno].balance -= wamt;
                alert('Account has been debited');
                alert(data[wacno].balance);
            }
            else {
                alert("Incorrect accountnumber or Pin")
            }
        }
        else {
            alert("Incorrect Account Details")
        }
    }
}
//-----------------------------------------------//
//-----------------register form validation------//
/*reistration form validation functions*/
function validateregistration(){  
    var username=document.getElementById('name');
    var email=document.getElementById('email');
    var phoneno=document.getElementById('phno');
    var pinnumber=document.getElementById('pin');
    var password=document.getElementById('psw');
    var pswrpt=document.getElementById('psw-rpt'); 
    if (username.value == null || username.value =='')
      {  
      alert('Name is required');
      return false;  
      }
    if (email.value == null || email.value =='')
      {  
      alert('Email is required');  
      return false;  
      }
    if (phoneno.value == null || phoneno.value =='')
      {  
      alert('Phone no is required');  
      return false;  
      }
    if (pinnumber.value == null || pinnumber.value =='')
      {  
      alert('Pinnumber is required');  
      return false;  
      }
    if (password.value.length <= 8 || password.value.length >= 15)
      {  
      alert('Password must be greater than 8 and less than 15 characters.')
      return false;  
      }  
    if (pswrpt.value == password.value)
      {  
      alert('successfully registered.')
      return false; 
      }
       else{
        alert('please repeat password correctly.')  
       }
}
