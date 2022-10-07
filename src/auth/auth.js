const BACK_URL = "https://cute-dodol-827922.netlify.app/auth"

export const login = async (data) => {
  const authUrl = `${BACK_URL}/login`
  const res = await fetch(authUrl, {
    method : "POST",
    headers : { 
      "Content-Type" : "application/json"
    },
    body : JSON.stringify(data)
  })
  console.log(res)
} 

export const register = async (data) => {
  const authUrl = `${BACK_URL}/register`
  const res = await fetch(authUrl, {
    method : "POST",
    headers : { 
      "Content-Type" : "application/json", 
    },
    body : JSON.stringify(data)
  })
  console.log(res)
}