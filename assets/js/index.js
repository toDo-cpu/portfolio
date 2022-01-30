class Theme {
    constructor(background, title, nav_bar, button, button_hover, presentation) {
        this.background = background;
        this.title = title;
        this.nav_bar = nav_bar;
        this.button = button;
        this.presentation = presentation;
        this.button_hover = button_hover;
    }
}

var default_theme_color = new Theme(
    "rgb(39, 48, 67)",
    "rgb(175, 227, 192)",
    "#171C27",
    "#EE964B",
    "#DDAE7E",
    "rgb(145, 151, 174)"
)

var rainbow_theme_color = new Theme(
    "#E0D0C1",
    "#A76D60",
    "#BB9877",
    "#210B2C",
    "#561D72",
    "#8B80F9"
)

var DEFAULT_THEME = 0
var RAINBOW_THEME = 1

function changeThemeColor(current_theme) {
    if (current_theme == DEFAULT_THEME) {
        setRainbowTheme()
    } else if (current_theme == RAINBOW_THEME){
        setDefaultTheme()
    }
    return
};

function setRainbowTheme() {
    document.getElementById("header").style["backgroundColor"] = rainbow_theme_color.nav_bar
    document.getElementsByTagName("body")[0].style["backgroundColor"]  = rainbow_theme_color.background
    var button = document.getElementsByClassName("nav-button")[0]
    button.style["background-color"] = rainbow_theme_color.button
    button.style["color"] = "white";

    try {
        document.getElementById("p-presentation").style["color"] = rainbow_theme_color.presentation
        document.getElementById("title-text").style["color"] = rainbow_theme_color.title
        document.getElementById("subtitle-text").style["color"] = rainbow_theme_color.title
    } catch (e) {}

    button.setAttribute("onclick",`changeThemeColor(${RAINBOW_THEME})`)
    return    
}   

function setDefaultTheme()
{   
    document.getElementById("header").style["backgroundColor"] = default_theme_color.nav_bar
    document.getElementsByTagName("body")[0].style["backgroundColor"] = default_theme_color.background
    var button = document.getElementsByClassName("nav-button")[0]
    button.style["background-color"] = default_theme_color.button
    button.style["color"] = "white";

    try { 
        document.getElementById("p-presentation").style["color"] = default_theme_color.presentation
        document.getElementById("title-text").style["color"] = default_theme_color.title
        document.getElementById("subtitle-text").style["color"] = default_theme_color.title
    } catch(e) {}


    button.setAttribute("onclick",`changeThemeColor(${DEFAULT_THEME})`)
    return
}
