/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TestBed} from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import {AppDemo} from './app.demo.component';
import {AppService} from '../../services/app.service';

describe('app-demo component spec', function () {
    var comp;
    var fixture;

    beforeEach(async function () {
        TestBed.resetTestEnvironment();

        TestBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting());

        TestBed.configureTestingModule({
            declarations: [
                AppDemo
            ],
            providers: [
                AppService
            ]
        }).compileComponents().then(function () {
            fixture = TestBed.createComponent(AppDemo);
            fixture.detectChanges();
            comp = fixture.componentInstance;
        });
    });

    it('should create component', function () {
        //assertions
        expect(comp).toBeDefined();
    });
});
