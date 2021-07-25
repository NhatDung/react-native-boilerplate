import {KeyStorage, load} from '@/utils';
import {DEFAULT_API_CONFIG} from '@/services/api/api-config';

function timeout(request, duration) {
  return new Promise((resolve, reject) => {
    let rqTimeout = setTimeout(() => {
      reject({
        message: 'request timeout',
        code: 408,
      });
    }, duration);

    request
      .then(res => {
        clearTimeout(rqTimeout);
        rqTimeout = null;
        resolve(res);
      })
      .catch(err => {
        clearTimeout(rqTimeout);
        rqTimeout = null;
        reject(err);
      });
  });
}

async function backToLogin() {};

const onError = e => {
  throw e.message;
};

export function getWithTimeout(api, headers) {
  return timeout(get(api, headers), DEFAULT_API_CONFIG.timeout);
}

async function get(api, headers) {
  const defaultHeaders = await getDefaultHeaders();
  return fetch(api, {
    method: 'get',
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  })
    .then(res => res.json())
    .then(handleResponse)
    .catch(onError);
}

export function postWithTimeout(api, headers, body) {
  return timeout(post(api, headers, body), DEFAULT_API_CONFIG.timeout, api);
}

async function post(api, headers, body) {
  if (typeof body === 'object' && body.constructor !== FormData) {
    body = JSON.stringify(body);
  }
  const defaultHeaders = await getDefaultHeaders();

  return fetch(api, {
    method: 'post',
    headers: defaultHeaders,
    body: body,
  })
    .then(res => res.json())
    .then(handleResponse)
    .catch(onError);
}

export function postFormDataWithTimeout(api, headers, body) {
  return timeout(
    postFormData(api, headers, body),
    DEFAULT_API_CONFIG.timeout,
    api,
  );
}

async function postFormData(api, headers, formData) {
  const user = await load(KeyStorage.USER);

  const heads = {
    Accept: 'application/json',
    Authorization: `Bearer ${user?.access_token}`,
    ...headers,
  };

  return fetch(api, {
    method: 'POST',
    headers: heads,
    body: formData,
  })
    .then(res => res.json())
    .then(handleResponse)
    .catch(onError);
}

export function uploadFileTimeout(api, headers, body, method = 'POST') {
  return timeout(
    uploadFile(api, headers, body, method),
    DEFAULT_API_CONFIG.timeout,
    api,
  );
}

async function uploadFile(api, headers, body, method) {
  const formData = new FormData();
  formData.append('files', {
    uri: body?.uri,
    type: body?.type || 'image/png',
    name: body?.fileName || `${new Date().getTime()}.png`,
  });

  const defaultHeaders = await getDefaultHeaders();

  return fetch(api, {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  })
    .then(res => res.json())
    .then(handleResponse)
    .catch(onError);
}

export function deleteWithTimeout(api, headers, body) {
  return timeout(_delete(api, headers, body), 30000, api);
}

async function _delete(api, headers, body) {
  if (typeof body === 'object' && body.constructor !== FormData) {
    body = JSON.stringify(body);
  }
  const defaultHeaders = await getDefaultHeaders();
  const heads = {
    ...defaultHeaders,
    ...headers,
  };

  return fetch(api, {
    method: 'delete',
    headers: heads,
    body,
  })
    .then(handleResponse)
    .catch(onError);
}

export function putWithTimeout(api, headers, body) {
  return timeout(put(api, headers, body), 30000, api);
}

async function put(api, headers, body) {
  if (typeof body === 'object' && body.constructor !== FormData) {
    body = JSON.stringify(body);
  }
  const defaultHeaders = await getDefaultHeaders();
  const heads = {
    ...defaultHeaders,
    ...headers,
  };

  return fetch(api, {
    method: 'put',
    headers: heads,
    body,
  })
    .then(res => res.json())
    .then(handleResponse)
    .catch(onError);
}

async function getDefaultHeaders() {
  const user = await load(KeyStorage.USER);
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.access_token}`,
  };
}

async function handleResponse(response) {
  if (!response.success) {
    if (response.status_code === 401) {
      const error = {
        message: '401',
        code: 401,
      };
      throw new Error(JSON.stringify(error));
    }
    throw new Error(JSON.stringify(response));
  }

  if (typeof response.data === 'undefined') {
    return {};
  }

  if (typeof response.data === 'object') {
    return {
      data: response.data,
    };
  }
  
  return {};
}
