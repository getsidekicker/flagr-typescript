"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicFetchHttpLibrary = void 0;
const http_1 = require("./http");
const rxjsStub_1 = require("../rxjsStub");
const node_fetch_1 = require("node-fetch");
class IsomorphicFetchHttpLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = node_fetch_1.default(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
        }).then((resp) => {
            const headers = {};
            resp.headers.forEach((value, name) => {
                headers[name] = value;
            });
            const body = {
                text: () => resp.text(),
                binary: () => resp.buffer()
            };
            return new http_1.ResponseContext(resp.status, headers, body);
        });
        return rxjsStub_1.from(resultPromise);
    }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
//# sourceMappingURL=isomorphic-fetch.js.map