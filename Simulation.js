let propertyImg1 = document.getElementById("img1").style;
let propertyImg2 = document.getElementById("img2").style;

function assemble()
{
    propertyImg1.left = parseInt(propertyImg1.left) + 20 + 'px';
    propertyImg2.left = parseInt(propertyImg2.left) - 20 + 'px';
    if (propertyImg1.left == propertyImg2.left)
    {
        document.getElementById("thaotac1").innerHTML = "Đã lắp ráp xong";
        document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
        flashLamp.light();

        document.write("Turn on<br/>")
        flashLamp.turnOn();
        flashLamp.light();
        document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

        document.write("Turn off<br/>")
        flashLamp.turnOff();
        flashLamp.light();
    }
}

window.onload = function ()
{
    propertyImg1.position = "relative";
    propertyImg1.left = "200px";
    propertyImg2.position = "relative";
    propertyImg2.left = "800px";
}