import { $Fetch } from 'ohmyfetch';

interface Extras {
  headers?: { [key: string]: string };
  // add other properties if needed
}


class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
    * method - GET, POST, PUT
    * URL
  **/
  async call<T>(method: string, url: string, data?: object, extras: Extras = {}): Promise<T> {

  // Retrieve the value of a cookie
  const cookieValueRaw = document?.cookie?.split('; ')?.find(row => row.startsWith('authStore='))?.split('=')[1] || ''
  const cookieValue = decodeURIComponent(cookieValueRaw)

  // Extract specific information from the cookie value
  let accessToken: string = ''
  if (cookieValue) {
    const parsedCookie = JSON.parse(cookieValue);
    accessToken = parsedCookie.access_token
  }

    const headers = {
      ...extras.headers,
      Authorization: `Bearer ${accessToken}`

    }
    const $res: T = await this.$fetch(url, { method, body: data, headers, ...extras });
    return $res;
  }
}

export default HttpFactory;
