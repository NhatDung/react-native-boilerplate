import {
  postWithTimeout,
  getWithTimeout,
  deleteWithTimeout,
  putWithTimeout,
  postFormDataWithTimeout,
  uploadFileTimeout,
} from './networking';
import {DEFAULT_API_CONFIG} from '@/services/api/api-config';

export function get(url, headers) {
  return getWithTimeout(DEFAULT_API_CONFIG.url + url, headers);
}

export function post(url, headers, body) {
  return postWithTimeout(DEFAULT_API_CONFIG.url + url, headers, body);
}

export function put(url, headers, body) {
  return putWithTimeout(DEFAULT_API_CONFIG.url + url, headers, body);
}

export function _delete(url, headers, body) {
  return deleteWithTimeout(DEFAULT_API_CONFIG.url + url, headers, body);
}

export function postFormData(url, headers, formData) {
  return postFormDataWithTimeout(
    DEFAULT_API_CONFIG.url + url,
    headers,
    formData,
  );
}

export function uploadFile(response, url = '/file/upload', method) {
  return uploadFileTimeout(
    DEFAULT_API_CONFIG.url + url,
    null,
    response,
    method,
  );
}
