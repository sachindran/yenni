var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        photosLoad();
        videoLoad();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var Puship = window.plugins.puship;
        Puship.EnableLog = true;
        Puship.PushipAppId = "aeOfVNsNvt013hP"; // I.E.: puship_id = "h1mCVGaP9dtGnwG"

        if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
            var GCMCode = "119085618976"; // This is the senderID provided by Google. I.E.: "28654934133"
            Puship.GCM.Register(GCMCode,
            {
                successCallback: function (pushipresult){
                    navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
            Puship.APNS.Register(
            {
                successCallback: function (pushipresult){
                    navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
            Puship.WP.Register(
            {
                successCallback: function (pushipresult){
                    navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else {
            //Console.log("Not supported platform");
        }*/
    }

};

app.initialize();
function openLink(url)
{
    //var url="https://www.facebook.com/mikeyennikennermayor";
    var target = "_blank";
    var options = "location=yes";
    var ref = cordova.InAppBrowser.open(url, target,options);
}
function photosLoad()
{
    var jsonText = JSON.stringify({});
     $.ajax({
        type: "POST",
        url: "http://thekbsystems.com/electmikeyenni/electmikeyenni.asmx/ImageURLList", // add web service Name and web service Method Name
        data: jsonText,  //web Service method Parameter Name and ,user Input value which in Name Variable.
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response)
            {
                if(response.d)
                        {
                            var i = 0;
                            var a = 'a';
                            var data = JSON.parse(response.d);
                            $.each(data, function(index, element)   {
                                if(i==0){
                                    a='a';
                                }
                                else if(i==1)
                                {
                                    a='b';
                                }
                                else if(i==2)
                                {
                                    a='c';
                                }
                                else
                                {
                                    a='d';
                                }
                                document.getElementById("picGallery").innerHTML = document.getElementById("picGallery").innerHTML+"<div class='ui-block-"+a+"'>"+
                                    "<a href='#myPopup"+element.ImageId+"' data-rel='popup' class='ui-btn-inline ui-corner-all'>"+
                                        "<img height='100%' width='90%' src='http://"+element.ThumbNailURL+"'>"+
                                    "</a>"+
                                    "<div data-role='popup' id='myPopup"+element.ImageId+"'>"+
                                        "<img height='100%' width='100%' src='http://"+element.LargeImageURL+"'>"+
                                    "</div>"+
                                "</div>";
                                i++;
                                i=i%4;
                            });
                        //$("#lightgallery").trigger("create");
                        }
            },
        error: function(xhr, textStatus, error){
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
            }      
    });   
}
function videoLoad()
{
    var jsonText = JSON.stringify({});
     $.ajax({
        type: "POST",
        url: "http://thekbsystems.com/electmikeyenni/electmikeyenni.asmx/VideoURLList", // add web service Name and web service Method Name
        data: jsonText,  //web Service method Parameter Name and ,user Input value which in Name Variable.
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response)
            {
                if(response.d)
                        {
                            var i = 0;
                            var a = 'a';
                            var data = JSON.parse(response.d);
                            $.each(data, function(index, element)   {
                                if(i==0){
                                    a='a';
                                }
                                else if(i==1)
                                {
                                    a='b';
                                }
                                else if(i==2) 
                                {
                                    a='c';
                                }
                                else
                                {
                                    a='d';
                                }
                                document.getElementById("videoGallery").innerHTML = document.getElementById("videoGallery").innerHTML+"<div class='ui-block-"+a+"'>"+
                                    "<a href='#myPopup"+element.VideoId+"' data-rel='popup' class='ui-btn-inline ui-corner-all'>"+
                                        "<img height='100%' width='90%' src='"+element.VideoThumbURL+"'>"+
                                    "</a>"+
                                    "<div data-role='popup' id='myPopup"+element.VideoId+"'>"+
                                        "<iframe width='100%' height='100%' src='"+element.VideoURL+"' frameborder='0' allowfullscreen></iframe>"+
                                    "</div>"+
                                "</div>";
                                i++;
                                i=i%4;
                            });
                        //$("#lightgallery").trigger("create");
                        }
            },
        error: function(xhr, textStatus, error){
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
            }      
    });   
}
function showImage(img)
{
    PhotoViewer.show(img);
}
function requestYard()
{
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var yard = $('#yardSignCheckbox').is(':checked');
    var telephone = $('#telephoneCheckbox').is(':checked');
    var doorknocking = $('#doorknockingCheckbox').is(':checked');
    var signwaving = $('#signwavingCheckbox').is(':checked');
    //console.log("click");
    if(fName != '' && fName!= '' && street!= '' && city!= '' && state!= '' && zip!= '' && email!= '' && phone!= '' && validateEmail(email)) 
    {
        if(telephone || doorknocking || yard || signwaving)
        {
            var jsonText = JSON.stringify({FirstName : fName,LastName :lName,StreetAddress:street,city:city,state:state,zip:zip,PhoneNo:phone,EmailId:email,yardCheck:yard,telephoneCheck:telephone,doorknockingCheck:doorknocking,signwavingCheck:signwaving});
            $.ajax({
                type: "POST",
                url: "http://thekbsystems.com/electmikeyenni/electmikeyenni.asmx/InsertDetailsForYardSign", // add web service Name and web service Method Name
                data: jsonText,  //web Service method Parameter Name and ,user Input value which in Name Variable.
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response)
                    {
                        alert("Thank you for volunteering!!");         
                    },
                error: function(xhr, textStatus, error){
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error);
                    }      
            });
        }
        else
        {
            alert("Check one of the checkboxes!");
        }
    }
    else
    {
        alert("Please enter all details.");
    }
}
function sendSms() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Thank you for sharing!!'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
function sendEmail()
{

    var toEmail = $("#toEmail").val();
    var messageEmail = $("#messageEmail").val();
    //console.log("click");
    if(toEmail != '' && messageEmail!= '' && validateEmail(toEmail)) 
    {

            var jsonText = JSON.stringify({emailID : toEmail,MessageBody :messageEmail});
            $.ajax({
                type: "POST",
                url: "http://thekbsystems.com/electmikeyenni/electmikeyenni.asmx/sendEmail", // add web service Name and web service Method Name
                data: jsonText,  //web Service method Parameter Name and ,user Input value which in Name Variable.
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response)
                    {
                        alert("Thank you for sharing!!");         
                    },
                error: function(xhr, textStatus, error){
                    alert("Error sharing via email.");
                    console.log(xhr.statusText);
                    console.log(textStatus);
                    console.log(error);
                    }      
            });
        
    }
    else
    {
        alert("Please enter all details correctly.");
    }
    
}
angular.module('yenni', [])
.controller('pushMessagesController', function($scope,$http) {
        var dataObj = this;
      var url = "http://thekbsystems.com/electmikeyenni/electmikeyenni.asmx/RetrievePushNotificationList";
      $http({
        url: url,
        dataType: 'json',
        method: 'POST',
        data: '',
        headers: 
        {
          "Content-Type": "application/json"
        }
      }).
      success(function(response)
      {
        dataObj.obj = JSON.parse(response.d);
      }).
      error(function(error)
      {
        dataObj.error = error;
      });

  });