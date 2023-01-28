import { deleteCookie, getCookie, setCookie, getCookies } from "cookies-next";

// Limit size text
export function limitSizeText(text = "", length = 0) {
  if (!text) return ""
  return text.length > length ? text.substring(0, length) + "..." : text;
}
// Get time since
export function getTimeSince(date) {
  const seconds = Math.floor((new Date() - Date.parse(date)) / 1000)
  let interval = seconds / 31536000
  if (interval > 1) {
    return `${ Math.floor(interval) } years`
  }
  interval = seconds / 2592000
  if (interval > 1) {
    return `${ Math.floor(interval) } months`
  }
  interval = seconds / 86400
  if (interval > 1) {
    return `${ Math.floor(interval) } days`
  }
  interval = seconds / 3600
  if (interval > 1) {
    return `${ Math.floor(interval) } hours`
  }
  interval = seconds / 60
  if (interval > 1) {
    return `${ Math.floor(interval) } minutes`
  }
  return `${ Math.floor(interval) } seconds`
}
// Copy on clipboard
export function copyClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}
// Tranform to slug
export function transformToSlug(text) {
  return text.toString().normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
}
// Login cookies user
export function loginUserCookies(datas) {
  setCookie("connected", true)
  setCookieObject("bookmarked", datas.bookmarked)
  setCookie("description", datas.description)
  setCookie("email", datas.email)
  setCookie("id", datas.id)
  setCookie("jwt", datas.jwt)
  setCookieObject("liked", datas.liked)
  setCookie("name", datas.name)
  setCookie("slug", datas.slug)
  setCookie("twitter_account", datas.twitter_account)
}
// Get cookies user
export function getUserCookies() {
  return {
    connected: getCookie("connected") ? getCookie("connected") : false,
    bookmarked: getCookie("bookmarked-types") ? getCookieObject("bookmarked") : { spotlights: [], insights: [], resources: [] },
    description: getCookie("description") ? getCookie("description") : null,
    email: getCookie("email") ? getCookie("email") : null,
    id: getCookie("id") ? getCookie("id") : null,
    jwt: getCookie("jwt") ? getCookie("jwt") : null,
    liked: getCookie("liked-types") ? getCookieObject("liked") : { spotlights: [] },
    name: getCookie("name") ? getCookie("name") : null,
    slug: getCookie("slug") ? getCookie("slug") : null,
    twitter_account: getCookie("twitter_account") ? getCookie("twitter_account") : null,
  }
}
// Logout cookies user
export function logoutUserCookies() {
  setCookie("connected", false)
  setCookieObject("bookmarked", { spotlights: [], insights: [], resources: [] })
  setCookie("description", null)
  setCookie("email", null)
  setCookie("id", null)
  setCookie("jwt", null)
  setCookieObject("liked", { spotlights: [] })
  setCookie("name", null)
  setCookie("slug", null)
  setCookie("twitter_account", null)
}

export function setCookieObject(dataName, object) {
  let types = ""
  Object.entries(object).forEach(([key, value], index) => {
    setCookie(`${ dataName }-${ key }`, getIdsFromArrayOfObject(value))
    types += key
    if (index !== Object.keys(object).length - 1) {
      types += ","
    }
  });
  setCookie(`${ dataName }-types`, types)
}

export function getCookieObject(dataName) {
  const object = {}
  if(getCookie(`${ dataName }-types`)) {
    getCookie(`${ dataName }-types`).split(',').forEach(type => {
      if (getCookie(`${ dataName }-${ type }`).length !== 0) {
        object[type] = getIdsFromString(getCookie(`${ dataName }-${ type }`))
      } else {
        object[type] = []
      }
    });
  }
  return object
}

function getIdsFromArrayOfObject(array) {
  let listIds = ""
  array.forEach((element, index) => {
    listIds += element.id
    if (index !== array.length - 1) {
      listIds += ","
    }
  });
  return listIds
}

function getIdsFromString(string) {
  return string.split(',').map(element => {
    return { id: parseInt(element) }
  });
}