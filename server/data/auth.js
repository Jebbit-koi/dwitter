import MongoDb from 'mongodb';
import { getUsers } from '../database/database.js';
const ObjectID = MongoDb.ObjectID;

export async function findByUsername(username) {
  return getUsers().find({ username }).next().then(data => { console.log(data); return data;})
}

export async function findById(id) {
  return getUsers().find({ _id: new ObjectID(id) }).next();
}

export async function createUser(user) {
  return getUsers().insertOne(user).then((result) => result.ops[0]._id.toString());
}