import { create } from 'apisauce';

const questionApi = create({
  // baseURL: 'https://interviewappnode.herokuapp.com',
  // baseURL: 'http://nodgen-dev.us-west-2.elasticbeanstalk.com',
    // baseURL: 'http://nodgen-dev.us-west-2.elasticbeanstalk.com',
  baseURL: 'http://nexusinterviewing.ap-southeast-1.elasticbeanstalk.com',
  method:'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  withCredentials: true,
  timeout: 60000,
});

export default function getQuestion() { return questionApi.get(`/list/getList`); }
