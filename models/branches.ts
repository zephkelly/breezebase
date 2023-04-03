import mongoose from 'mongoose';
import { PostSchema, Post } from './post';

//--------------------Branch--------------------
// This is the branch schema for storing all posts,
// admins, moderators, and tags for a branch.
//
export interface Branch {
  _id: string;
  posts: Post[];
}

export const BranchSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  posts: [PostSchema],
});

export const BranchModel = mongoose.model('branches', BranchSchema);


//--------------------Branch Metadata--------------------
// This is the schema for storing all metadata for the site's branches.
//
export interface Branch_Metadata {
  _id: number; //This is generated by postgres and shared as foreign key
  branch_name: string;
  creator_id: string;
  owner_id: string;
  description: string;
  created_date: Date;
  updated_date: Date;
}

export const branch_metadata: string = 'branch_metadata';

//SQL Schema
// CREATE TABLE branch_metadata (
//   id BIGSERIAL PRIMARY KEY,
//   branch_id VARCHAR(255) NOT NULL,
//   creator_id VARCHAR(255) NOT NULL,
//   owner_id VARCHAR(255) NOT NULL,
//   description VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP NOT NULL,
//   updated_at TIMESTAMP NOT NULL
// );