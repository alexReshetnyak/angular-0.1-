"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var DemoService = (function () {
    //  private isActive: boolean;
    //   constructor(@Optional() private http: Http, @Optional() private config: any) {
    //     if(config.isActive) {
    //         this.isActive = config.isActive;
    //         console.log("Params is set:" + this.isActive);
    //     }  
    //   }
    function DemoService(http) {
        this.http = http;
    }
    DemoService.prototype.getText = function () {
        var _this = this;
        this.http.get('/README.MD', { responseType: http_1.ResponseContentType.Text })
            .subscribe(function (data) { return console.log(data); }, function (err) { return _this.handleError(err); });
    };
    DemoService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + (err.statusText || '') + " " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return Observable_1.Observable.throw(errMessage);
    };
    return DemoService;
}());
DemoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DemoService);
exports.DemoService = DemoService;
//# sourceMappingURL=demo.service.js.map