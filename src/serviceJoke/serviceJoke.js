export default class ServiceJoke {
  _apiJoke = 'https://api.chucknorris.io/jokes'
  getResource = async (url) => {
    const res = await fetch(`${this._apiJoke}${url}`)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  getJoke = async () => {
    return await this.getResource(`/random`)
  }
}
