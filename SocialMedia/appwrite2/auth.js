import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
  client = new Client()
  account //
  constructor () {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

  async createAccount ({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      )

      if (userAccount) {
        //call another methods like login
        return this.login({ email, password })
      } else {
        return userAccount
      }
    } catch (error) {
      throw error
    }
  }

  //TODO ***LOGIN  ***

  async login ({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw error
    }
  }
  // TODO *** Check I am LOGIN or NOT ***
  async getCurrentUser () {
    try {
      return await this.account.get()
    } catch (error) {
      console.log('Appwrite serviece ::getCurrentUSer:error', error)
      throw error
    }

    return null
  }

  //TODO ***LOGOUT  ***
  async logout () {
    try {
      await this.account.deleteSessions() //deleteSession or deleteSessions
    } catch (error) {
      throw error
    }
  }

  //!END
}

const authService = new AuthService()

export default authService
