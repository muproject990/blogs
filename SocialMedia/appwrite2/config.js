import conf from '../conf'

import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
  client = new Client()
  databases
  bucket

  constructor () {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteUrl)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async cretePost ({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      console.log('Appwrite Service::Create POST::error', error)
    }
  }

  async updatePost (slug, { title, slug, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      )
    } catch (error) {}
  }

  //TODO ***DeletePost  ***
  async deletePost (slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log('Appwrite Service::Delete POST::error', error)
      return false
    }
  }

  //TODO ***getPost  ***
  async getPost (slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log('Appwrite Error :GetPostERROR:: Error:', error)
    }
  }

  //TODO *** LIST ACTIVE POST  ***
  //! ***  Indexes lagara matra queries launa sakxam natra mildaina   ***
  async getPosts (queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
    } catch (error) {}
  }

  // !File Upload service
  // ? From APPWRITEDOCS  import { Client, Storage } from 'appwrite'

  // const client = new Client()
  //   .setEndpoint('https://cloud.appwrite.io/v1')
  //   .setProject('[PROJECT_ID]')

  // const storage = new Storage(client)

  // const promise = storage.createFile(
  //   '[BUCKET_ID]',
  //   ID.unique(),
  //   document.getElementById('uploader').files[0]
  // )

  // promise.then(
  //   function (response) {
  //     console.log(response) // Success
  //   },
  //   function (error) {
  //     console.log(error) // Failure
  //   }
  // )

  async uploadFile (file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log('UPLOAD FILE :: Error::', error)
      return false
    }
  }

  // !File Delete service

  async deleteFile () {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
      return true
    } catch (error) {
      console.log('Appwrite Service ::DeleteFile::Error', error)
      return false
    }
  }

  //? File PReview

  getFilePreview (fileId) {
    return this.bucket.getFilePreview((conf.appwriteBucketId, fileId))
  }
}

const service = new Service()
export default service
