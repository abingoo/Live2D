(function() {
    var live2d_initializing = true;

    function Z() {
        if (live2d_initializing) {
            return;
        }
        this._$Xg = null;
        this._$Mk = null;
        this.drawDataID = null;
        this.targetBaseDataID = null;
        this._$Tk = null;
        this._$Kg = null;
    }
    Z._$5d = -2;
    Z._$hg = 500;
    Z._$Lk = 2;
    Z._$Fg = 3;
    Z.minInterval_$Yj = Z._$hg;
    Z.maxInterval_$Cj = Z._$hg;
    Z.getMinInterval_$Rd = function() {
        return Z.minInterval_$Yj;
    };
    Z.getMaxInterval_$Hd = function() {
        return Z.maxInterval_$Cj;
    };
    Z.prototype._initWithBufferReader = function(aC) {
        this.drawDataID = aC._getNextValue();
        this.targetBaseDataID = aC._getNextValue();
        this._$Xg = aC._getNextValue();
        this._$Mk = aC._getNextInt32();
        this._$Tk = aC._getNextArr_int32();
        this._$Kg = aC._getNextArr_float32();
        this._$8g(this._$Tk);
    };
    Z.prototype.init = function(aC) {};
    Z.prototype._$td = function(aC, aD) {
        aD._$4g[0] = false;
        aD._$1m = aB._$Aj(aC, this._$Xg, aD._$4g, this._$Tk);
        if (l2d_Live2D.L2D_OUTSIDE_PARAM_AVAILABLE) {} else {
            if (aD._$4g[0]) {
                return;
            }
        }
        aD.opacity = aB._$kd(aC, this._$Xg, aD._$4g, this._$Kg);
    };
    Z.prototype._$jk = function(aC, aD) {};
    Z.prototype.getDrawDataID = function() {
        return this.drawDataID;
    };
    Z.prototype.setDrawDataID = function(aC) {
        this.drawDataID = aC;
    };
    Z.prototype.getOpacity = function(aC, aD) {
        return aD.opacity;
    };
    Z.prototype._$pg = function(aC, aD) {
        return aD._$1m;
    };
    Z.prototype._$8g = function(aE) {
        for (var aD = aE.length - 1; aD >= 0; --aD) {
            var aC = aE[aD];
            if (aC < Z.minInterval_$Yj) {
                Z.minInterval_$Yj = aC;
            } else {
                if (aC > Z.maxInterval_$Cj) {
                    Z.maxInterval_$Cj = aC;
                }
            }
        }
    };
    Z.prototype.getTargetBaseDataID = function() {
        return this.targetBaseDataID;
    };
    Z.prototype.setTargetBaseDataID = function(aC) {
        this.targetBaseDataID = aC;
    };
    Z.prototype._$Sj = function() {
        return (this.targetBaseDataID != null && (this.targetBaseDataID != l2d_BaseDataID.DST_BASE_ID()));
    };
    Z.prototype.draw = function(aE, aC, aD) {};
    Z.prototype.getType = function() {};
    Z.prototype._$cj = function(aD, aC, aE) {};

    // function I(aC) {
    //     if (live2d_initializing) {
    //         return;
    //     }
    //     this._$Pk = aC;
    // }
    // I._$qd = -1;
    // I.prototype.toString = function() {
    //     return this._$Pk;
    // };

    function l2d_UtDebug() {}
    // l2d_UtDebug._$Fm = 0;
    l2d_UtDebug._$qf = new Object();
    l2d_UtDebug.start = function(aD) {
        var aC = l2d_UtDebug._$qf[aD];
        if (aC == null) {
            aC = new aa();
            aC._$d = aD;
            l2d_UtDebug._$qf[aD] = aC;
        }
        aC.startTime = l2d_UtSystem.getSystemTimeMSec();
    };
    l2d_UtDebug.dump = function(aE) {
        var aC = l2d_UtDebug._$qf[aE];
        if (aC != null) {
            var aD = l2d_UtSystem.getSystemTimeMSec();
            var aF = aD - aC.startTime;
            console.log(aE + " : " + aF + "ms");
            return aF;
        } else {
            return -1;
        }
    };
    l2d_UtDebug.end = function(aE) {
        var aC = l2d_UtDebug._$qf[aE];
        if (aC != null) {
            var aD = l2d_UtSystem.getSystemTimeMSec();
            return aD - aC.startTime;
        } else {
            return -1;
        }
    };
    l2d_UtDebug.error = function(aD, aC) {
        console.log("error : " + aD + "\n", aC);
    };
    l2d_UtDebug._$GP = function(aD, aC) {
        console.log(aD, aC);
    };
    l2d_UtDebug._$yT = function(aD, aC) {
        console.log(aD, aC);
        console.log("\n");
    };
    l2d_UtDebug._$DT = function(aE, aD) {
        for (var aC = 0; aC < aD; aC++) {
            if (aC % 16 == 0 && aC > 0) {
                console.log("\n");
            } else {
                if (aC % 8 == 0 && aC > 0) {
                    console.log("  ");
                }
            }
            console.log("%02X ", (aE[aC] & 255));
        }
        console.log("\n");
    };
    l2d_UtDebug._$od = function(aG, aD, aF) {
        console.log("%s\n", aG);
        var aC = aD.length;
        for (var aE = 0; aE < aC; ++aE) {
            console.log("%5d", aD[aE]);
            console.log("%s\n", aF);
            console.log(",");
        }
        console.log("\n");
    };
    l2d_UtDebug.dumpException = function(aC) {
        console.log("dump exception : " + aC);
        console.log("stack :: " + aC.stack);
    };

    // function aa() {
    //     this._$d = null;
    //     this.startTime = null;
    // }

    // function ak() {}
    // ak._$2f = function(aC) {
    //     return ak._$2f(new _$Y(aC));
    // };
    // ak._$2f = function(aE) {
    //     if (!aE.exists()) {
    //         throw new _$bm(aE._$Sk());
    //     }
    //     var aC = aE.length();
    //     var aD = new Int8Array(aC);
    //     var aH = new _$rm(new _$Ik(aE), 8192);
    //     var aF;
    //     var aG = 0;
    //     while ((aF = aH.read(aD, aG, aC - aG)) > 0) {
    //         aG += aF;
    //     }
    //     return aD;
    // };
    // ak._$x = function(aE) {
    //     var aD = null;
    //     var aG = null;
    //     try {
    //         aD = (aE instanceof Array) ? aE : new _$rm(aE, 8192);
    //         aG = new _$Jm();
    //         var aH = 1000;
    //         var aF;
    //         var aC = new Int8Array(aH);
    //         while ((aF = aD.read(aC)) > 0) {
    //             aG.write(aC, 0, aF);
    //         }
    //         return aG._$fg();
    //     } finally {
    //         if (aE != null) {
    //             aE.close();
    //         }
    //         if (aG != null) {
    //             aG.flush();
    //             aG.close();
    //         }
    //     }
    // };

    function l2d_Live2DModelBase() {
        if (live2d_initializing) {
            return;
        }
        this._model = null;
        this._modelContext = null;
        this._$tH = 0;
        l2d_Live2DModelBase._instance_count++;
        this._modelContext = new l2d_context_params(this);
    }
    l2d_Live2DModelBase._$2m = 1;
    l2d_Live2DModelBase._$im = 2;
    l2d_Live2DModelBase._instance_count = 0;
    l2d_Live2DModelBase.loadModel_exe = function(aLive2DModel, inputStream) {
        try {
            if (inputStream instanceof ArrayBuffer) {
                inputStream = new DataView(inputStream);
            }
            if (!(inputStream instanceof DataView)) {
                throw new I("_$gg#loadModel(b) / b _$3 be DataView or ArrayBuffer");
            }
            var buffReader = new l2d_bufferReader(inputStream);
            var aH = buffReader._getNextInt8();
            var aF = buffReader._getNextInt8();
            var aE = buffReader._getNextInt8();
            var fmtVersion;
            if (aH == 109 && aF == 111 && aE == 99) {
                fmtVersion = buffReader._getNextInt8();
            } else {
                throw new I("Model load error , Unknown fomart.");
            }
            buffReader._setFormatVersion(fmtVersion);
            if (fmtVersion > l2d_global_format._latest_format_version) {
                aLive2DModel._$tH |= l2d_Live2DModelBase._$im;
                var aM = l2d_global_format._latest_format_version;
                var aD = "Model load error , Illegal data version error ( SDK : " + aM + " < loaded . : " + aI + " )@l2d_Live2DModelBase#loadModel()\n";
                throw new I(aD);
            }
            var model = buffReader._getNextValue();
            if (fmtVersion >= l2d_global_format._some_old_format_version_8) {
                var aC = buffReader._getNextInt16();
                var aO = buffReader._getNextInt16();
                if (aC != -30584 || aO != -30584) {
                    aL._$tH |= l2d_Live2DModelBase._$2m;
                    throw new I("Model load error , EOF not found.");
                }
            }
            aLive2DModel.setModelImpl(model);
            var modelContext = aLive2DModel.getModelContext();
            modelContext.init();
        } catch (aJ) {
            l2d_UtDebug.dumpException(aJ);
        }
    };
    l2d_Live2DModelBase.prototype.setModelImpl = function(aC) {
        this._model = aC;
    };
    l2d_Live2DModelBase.prototype.getModelImpl = function() {
        if (this._model == null) {
            this._model = new l2d_model();
            this._model._initialize();
        }
        return this._model;
    };
    l2d_Live2DModelBase.prototype.getCanvasWidth = function() {
        if (this._model == null) {
            return 0;
        }
        return this._model.getCanvasWidth();
    };
    l2d_Live2DModelBase.prototype.getCanvasHeight = function() {
        if (this._model == null) {
            return 0;
        }
        return this._model.getCanvasHeight();
    };
    l2d_Live2DModelBase.prototype.getParamFloat = function(paramIndex) {
        if (typeof paramIndex != "number") {
            paramIndex = this._modelContext.getParamIndex(l2d_ParamID.getID(paramIndex));
        }
        return this._modelContext.getParamFloat(paramIndex);
    };
    l2d_Live2DModelBase.prototype.setParamFloat = function(paramIndex, value, weight) {
        if (typeof paramIndex != "number") {
            paramIndex = this._modelContext.getParamIndex(l2d_ParamID.getID(paramIndex));
        }
        if (arguments.length < 3) {
            weight = 1;
        }
        this._modelContext.setParamFloat(paramIndex, this._modelContext.getParamFloat(paramIndex) * (1 - weight) + value * weight);
    };
    l2d_Live2DModelBase.prototype.addToParamFloat = function(paramIndex, value, weight) {
        if (typeof paramIndex != "number") {
            paramIndex = this._modelContext.getParamIndex(l2d_ParamID.getID(paramIndex));
        }
        if (arguments.length < 3) {
            weight = 1;
        }
        this._modelContext.setParamFloat(paramIndex, this._modelContext.getParamFloat(paramIndex) + value * weight);
    };
    l2d_Live2DModelBase.prototype.multParamFloat = function(paramIndex, mult, weight) {
        if (typeof paramIndex != "number") {
            paramIndex = this._modelContext.getParamIndex(l2d_ParamID.getID(paramIndex));
        }
        if (arguments.length < 3) {
            weight = 1;
        }
        this._modelContext.setParamFloat(paramIndex, this._modelContext.getParamFloat(paramIndex) * (1 + (mult - 1) * weight));
    };
    l2d_Live2DModelBase.prototype.getParamIndex = function(paramID) {
        return this._modelContext.getParamIndex(l2d_ParamID.getID(paramID));
    };
    l2d_Live2DModelBase.prototype.loadParam = function() {
        this._modelContext.loadParam();
    };
    l2d_Live2DModelBase.prototype.saveParam = function() {
        this._modelContext.saveParam();
    };
    l2d_Live2DModelBase.prototype.init = function() {
        this._modelContext.init();
    };
    l2d_Live2DModelBase.prototype.update = function() {
        this._modelContext.update();
    };
    l2d_Live2DModelBase.prototype.generateModelTextureNo = function() {
        l2d_UtDebug.error("please override generateModelTextureNo()");
        return -1;
    };
    l2d_Live2DModelBase.prototype.releaseModelTextureNo = function(aC) {
        l2d_UtDebug.error("please override l2d_Live2DModelBase#releaseModelTextureNo() \n");
    };
    l2d_Live2DModelBase.prototype.deleteTextures = function() {};
    l2d_Live2DModelBase.prototype.draw = function() {};
    l2d_Live2DModelBase.prototype.getModelContext = function() {
        return this._modelContext;
    };
    l2d_Live2DModelBase.prototype.getErrorFlags = function() {
        return this._$tH;
    };
    l2d_Live2DModelBase.prototype.setupPartsOpacityGroup_alphaImpl = function(paramGroup, partsIDGroup, deltaTimeSec, CLEAR_TIME_SEC) {
        var aP = -1;
        var aT = 0;
        var aLive2DModel = this;
        var aE = 0.5;
        var aD = 0.15;
        var aS = true;
        if (deltaTimeSec == 0) {
            for (var i = 0; i < paramGroup.length; i++) {
                var aK = paramGroup[i];
                var aJ = partsIDGroup[i];
                var aN = (aLive2DModel.getParamFloat(aK) != 0);
                aLive2DModel.setPartsOpacity(aJ, (aN ? 1 : 0));
            }
            return;
        } else {
            if (paramGroup.length == 1) {
                var aK = paramGroup[0];
                var aO = (aLive2DModel.getParamFloat(aK) != 0);
                var aJ = partsIDGroup[0];
                var aL = aLive2DModel.getPartsOpacity(aJ);
                var aR = deltaTimeSec / CLEAR_TIME_SEC;
                if (aO) {
                    aL += aR;
                    if (aL > 1) {
                        aL = 1;
                    }
                } else {
                    aL -= aR;
                    if (aL < 0) {
                        aL = 0;
                    }
                }
                aLive2DModel.setPartsOpacity(aJ, aL);
            } else {
                for (var i = 0; i < paramGroup.length; i++) {
                    var aK = paramGroup[i];
                    var aN = (aLive2DModel.getParamFloat(aK) != 0);
                    if (aN) {
                        if (aP >= 0) {
                            break;
                        }
                        aP = i;
                        var aJ = partsIDGroup[i];
                        aT = aLive2DModel.getPartsOpacity(aJ);
                        aT += deltaTimeSec / CLEAR_TIME_SEC;
                        if (aT > 1) {
                            aT = 1;
                        }
                    }
                }
                if (aP < 0) {
                    console.log("No Parts Visible/ use default[%s]", paramGroup[0]);
                    aP = 0;
                    aT = 1;
                    aLive2DModel.loadParam();
                    aLive2DModel.setParamFloat(paramGroup[aP], aT);
                    aLive2DModel.saveParam();
                }
                for (var i = 0; i < paramGroup.length; i++) {
                    var aJ = partsIDGroup[i];
                    if (aP == aQ) {
                        aLive2DModel.setPartsOpacity(aJ, aT);
                    } else {
                        var aG = aLive2DModel.getPartsOpacity(aJ);
                        var aU;
                        if (aT < aE) {
                            aU = aT * (aE - 1) / aE + 1;
                        } else {
                            aU = (1 - aT) * aE / (1 - aE);
                        }
                        if (aS) {
                            var aI = (1 - aU) * (1 - aT);
                            if (aI > aD) {
                                aU = 1 - aD / (1 - aT);
                            }
                        }
                        if (aG > aU) {
                            aG = aU;
                        }
                        aLive2DModel.setPartsOpacity(aJ, aG);
                    }
                }
            }
        }
    };
    l2d_Live2DModelBase.prototype.setPartsOpacity = function(partsID, opacity) {
        if (typeof partsID != "number") {
            partsID = this._modelContext.getPartsDataIndex(l2d_PartsDataID.getID(partsID));
        }
        this._modelContext.setPartsOpacity(partsID, opacity);
    };
    l2d_Live2DModelBase.prototype.getPartsDataIndex = function(partsID) {
        if (!(partsID instanceof l2d_PartsDataID)) {
            partsID = l2d_PartsDataID.getID(partsID);
        }
        return this._modelContext.getPartsDataIndex(partsID);
    };
    l2d_Live2DModelBase.prototype.getPartsOpacity = function(partsID) {
        if (typeof partsID != "number") {
            partsID = this._modelContext.getPartsDataIndex(l2d_PartsDataID.getID(partsID));
        }
        if (partsID < 0) {
            return 0;
        }
        return this._modelContext.getPartsOpacity(partsID);
    };
    l2d_Live2DModelBase.prototype.getDrawParam = function() {};
    l2d_Live2DModelBase.prototype.getDrawDataIndex = function(drawDataID) {
        return this._modelContext.getDrawDataIndex(l2d_DrawDataID.getID(drawDataID));
    };
    l2d_Live2DModelBase.prototype.getDrawData = function(drawIndex) {
        return this._modelContext.getDrawData(drawIndex);
    };
    l2d_Live2DModelBase.prototype.getTransformedPoints = function(drawIndex) {
        var aD = this._modelContext.getDrawContext(drawIndex);
        if (aD instanceof ab) {
            return (aD).getTransformedPoints();
        }
        return null;
    };
    l2d_Live2DModelBase.prototype.getIndexArray = function(drawIndex) {
        if (drawIndex < 0 || drawIndex >= this._modelContext._drawDataList.length) {
            return null;
        }
        var aC = this._modelContext._drawDataList[drawIndex];
        if (aC != null && aC.getType() == a._$Lk) {
            if (aC instanceof b) {
                return aC.getIndexArray();
            }
        }
        return null;
    };

    function a() {
        if (live2d_initializing) {
            return;
        }
        Z.prototype.constructor.call(this);
        this.drawDataID = null;
        this.targetBaseDataID = null;
        this._$Xg = null;
        this._$Mk = null;
        this._$Tk = null;
        this._$Kg = null;
    }
    a.prototype = new Z();
    a._$5d = -2;
    a._$hg = 500;
    a._$Lk = 2;
    a._$Fg = 3;
    a._$Rm = 4;
    a.minInterval_$Yj = a._$hg;
    a.maxInterval_$Cj = a._$hg;
    a._$gk = function(aE) {
        for (var aD = aE.length - 1; aD >= 0; --aD) {
            var aC = aE[aD];
            if (aC < a.minInterval_$Yj) {
                a.minInterval_$Yj = aC;
            } else {
                if (aC > a.maxInterval_$Cj) {
                    a.maxInterval_$Cj = aC;
                }
            }
        }
    };
    a.getMinInterval_$Rd = function() {
        return a.minInterval_$Yj;
    };
    a.getMaxInterval_$Hd = function() {
        return a.maxInterval_$Cj;
    };
    a.prototype._initWithBufferReader = function(aC) {
        this.drawDataID = aC._getNextValue();
        this.targetBaseDataID = aC._getNextValue();
        this._$Xg = aC._getNextValue();
        this._$Mk = aC._getNextInt32();
        this._$Tk = aC._getNextArr_int32();
        this._$Kg = aC._getNextArr_float32();
        a._$gk(this._$Tk);
    };
    a.prototype._$td = function(aD, aC) {
        aC._$4g[0] = false;
        aC._$1m = aB._$Aj(aD, this._$Xg, aC._$4g, this._$Tk);
        if (l2d_Live2D.L2D_OUTSIDE_PARAM_AVAILABLE) {} else {
            if (aC._$4g[0]) {
                return;
            }
        }
        aC.opacity = aB._$kd(aD, this._$Xg, aC._$4g, this._$Kg);
    };
    a.prototype._$jk = function(aC) {};
    a.prototype.getDrawDataID = function() {
        return this.drawDataID;
    };
    a.prototype.setDrawDataID = function(aC) {
        this.drawDataID = aC;
    };
    a.prototype.getOpacity = function(aC, aD) {
        return aD.opacity;
    };
    a.prototype._$pg = function(aC, aD) {
        return aD._$1m;
    };
    a.prototype.getTargetBaseDataID = function() {
        return this.targetBaseDataID;
    };
    a.prototype.setTargetBaseDataID = function(aC) {
        this.targetBaseDataID = aC;
    };
    a.prototype._$Sj = function() {
        return (this.targetBaseDataID != null && (this.targetBaseDataID != l2d_BaseDataID.DST_BASE_ID()));
    };
    a.prototype.getType = function() {};

    function c() {
        if (live2d_initializing) {
            return;
        }
        this._baseDataID = null;
        this.targetBaseDataID = null;
        // this._$VP = true;
        this._$Kg = null;
    }
    c._$5d = -2;
    c._type1 = 1;
    c._type2 = 2;
    c.prototype._initWithBufferReader = function(aC) {
        this._baseDataID = aC._getNextValue();
        this.targetBaseDataID = aC._getNextValue();
    };
    c.prototype.readV2_opacity = function(aC) {
        if (aC.getFormatVersion() >= l2d_global_format.LIVE2D_FORMAT_VERSION_V2_10_SDK2) {
            this._$Kg = aC._getNextArr_float32();
        }
    };
    c.prototype.init = function(aC) {};
    c.prototype._$td = function(aD, aC) {};
    c.prototype.interpolateOpacity = function(aE, aF, aD, aC) {
        if (this._$Kg == null) {
            aD.setInterpolatedOpacity(1);
        } else {
            aD.setInterpolatedOpacity(aB._$kd(aE, aF, aC, this._$Kg));
        }
    };
    c.prototype._$jk = function(aD, aC) {};
    c.prototype._$ok = function(aG, aF, aH, aC, aD, aE, aI) {};
    c.prototype.getType = function() {};
    c.prototype.setTargetBaseDataID = function(aC) {
        this.targetBaseDataID = aC;
    };
    c.prototype.setBaseDataID = function(aC) {
        this._baseDataID = aC;
    };
    c.prototype.getTargetBaseDataID = function() {
        return this.targetBaseDataID;
    };
    c.prototype.getBaseDataID = function() {
        return this._baseDataID;
    };
    c.prototype._$Sj = function() {
        return (this.targetBaseDataID != null && (this.targetBaseDataID != l2d_BaseDataID.DST_BASE_ID()));
    };

    function l2d_UtSystem() {}
    l2d_UtSystem._$lj = 0;
    l2d_UtSystem._$xg = l2d_UtSystem._$lj;
    l2d_UtSystem._$8R = function() {
        return true;
    };
    l2d_UtSystem._$rH = function(aD) {
        try {
            var aE = getTimeMSec();
            while (getTimeMSec() - aE < aD) {}
        } catch (aC) {
            aC.dumpException();
        }
    };
    l2d_UtSystem.getUserTimeMSec = function() {
        return (l2d_UtSystem._$xg == l2d_UtSystem._$lj) ? l2d_UtSystem.getSystemTimeMSec() : l2d_UtSystem._$xg;
    };
    l2d_UtSystem.setUserTimeMSec = function(aC) {
        l2d_UtSystem._$xg = aC;
    };
    l2d_UtSystem.updateUserTimeMSec = function() {
        return (l2d_UtSystem._$xg = l2d_UtSystem.getSystemTimeMSec());
    };
    l2d_UtSystem.getTimeMSec = function() {
        return new Date().getTime();
    };
    l2d_UtSystem.getSystemTimeMSec = function() {
        return new Date().getTime();
    };
    l2d_UtSystem._$6 = function(aC) {};
    l2d_UtSystem._copyArrayFromStartWithLength = function(aH, aE, aD, aG, aC) {
        for (var aF = 0; aF < aC; aF++) {
            aD[aG + aF] = aH[aE + aF];
        }
    };

    function l2d_MotionQueueManager() {
        if (live2d_initializing) {
            return;
        }
        this.motions = null;
        this.L2D_VERBOSE = false;
        this.motions = new Array();
    }
    l2d_MotionQueueManager.prototype._$ek = function() {
        return this.motions;
    };
    l2d_MotionQueueManager.prototype.startMotion = function(aE, aD) {
        var aH = null;
        var aG = null;
        var aC = this.motions.length;
        for (var aF = 0; aF < aC; ++aF) {
            aG = this.motions[aF];
            if (aG == null) {
                continue;
            }
            aG._updateFinishTime(aG._motion.getFadeOut());
            if (this.L2D_VERBOSE) {
                l2d_UtDebug._$GP("MotionQueueManager[size:%2d]->startMotion() / start _$D _$S (m%d)\n", aC, aG._instanceNo);
            }
        }
        if (aE == null) {
            return -1;
        }
        aG = new l2d_motion_timer();
        aG._motion = aE;
        this.motions.push(aG);
        var aI = aG._instanceNo;
        if (this.L2D_VERBOSE) {
            l2d_UtDebug._$GP("MotionQueueManager[size:%2d]->startMotion() / new _motion (m%d)\n", aC, aI);
        }
        return aI;
    };
    l2d_MotionQueueManager.prototype.updateParam = function(aE) {
        try {
            var aD = false;
            for (var aF = 0; aF < this.motions.length; aF++) {
                var aG = this.motions[aF];
                if (aG == null) {
                    this.motions.splice(aF, 1);
                    aF--;
                    continue;
                }
                var aC = aG._motion;
                if (aC == null) {
                    this.motions = this.motions.splice(aF, 1);
                    aF--;
                    continue;
                }
                aC.updateParam(aE, aG);
                aD = true;
                if (aG.isFinished()) {
                    if (this.L2D_VERBOSE) {
                        l2d_UtDebug._$GP("MotionQueueManager[size:%2d]->updateParam() / _$f2 _motion (m%d)\n", this.motions.length - 1, aG._instanceNo);
                    }
                    this.motions.splice(aF, 1);
                    aF--;
                } else {}
            }
            return aD;
        } catch (aH) {
            l2d_UtDebug.error(aH);
            return true;
        }
    };
    l2d_MotionQueueManager.prototype.isFinished = function(aF) {
        if (arguments.length >= 1) {
            for (var aD = 0; aD < this.motions.length; aD++) {
                var aE = this.motions[aD];
                if (aE == null) {
                    continue;
                }
                if (aE._instanceNo == aF && !aE.isFinished()) {
                    return false;
                }
            }
            return true;
        } else {
            for (var aD = 0; aD < this.motions.length; aD++) {
                var aE = this.motions[aD];
                if (aE == null) {
                    this.motions.splice(aD, 1);
                    aD--;
                    continue;
                }
                var aC = aE._motion;
                if (aC == null) {
                    this.motions.splice(aD, 1);
                    aD--;
                    continue;
                }
                if (!aE.isFinished()) {
                    return false;
                }
            }
            return true;
        }
    };
    l2d_MotionQueueManager.prototype.stopAllMotions = function() {
        for (var aD = 0; aD < this.motions.length; aD++) {
            var aE = this.motions[aD];
            if (aE == null) {
                this.motions.splice(aD, 1);
                aD--;
                continue;
            }
            var aC = aE._motion;
            if (aC == null) {
                this.motions.splice(aD, 1);
                aD--;
                continue;
            }
            if (true) {
                this.motions.splice(aD, 1);
                aD--;
            }
        }
    };
    l2d_MotionQueueManager.prototype._getEnableDebug = function(aC) {
        this.L2D_VERBOSE = aC;
    };
    // l2d_MotionQueueManager.prototype._$u = function() {
    //     console.log("-- _$C --\n");
    //     for (var aC = 0; aC < this.motions.length; aC++) {
    //         var aD = this.motions[aC];
    //         var aE = aD._motion;
    //         console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, aE.toString());
    //     }
    // };

    function l2d_motion_timer() {
        this._motion = null;
        this._$Vf = true;
        this._finished = false;
        this._$pj = -1;
        this._$km = -1;
        this._finish_time = -1;
        this._instanceNo = null;
        this._instanceNo = l2d_motion_timer._instance_count++;
    }
    l2d_motion_timer._instance_count = 0;
    l2d_motion_timer.prototype.isFinished = function() {
        return this._finished;
    };
    l2d_motion_timer.prototype._updateFinishTime = function(aE) {
        var aD = l2d_UtSystem.getUserTimeMSec();
        var aC = aD + aE;
        if (this._finish_time < 0 || aC < this._finish_time) {
            this._finish_time = aC;
        }
    };
    l2d_motion_timer.prototype._getInstanceNo = function() {
        return this._instanceNo;
    };

    function l2d_BaseDataID(aC) {
        if (live2d_initializing) {
            return;
        }
        l2d_BaseID.prototype.constructor.call(this, aC);
    }
    l2d_BaseDataID.prototype = new l2d_BaseID();
    l2d_BaseDataID._baseDataID = null;
    l2d_BaseDataID._keyValMap = new Object();
    l2d_BaseDataID.DST_BASE_ID = function() {
        if (l2d_BaseDataID._baseDataID == null) {
            l2d_BaseDataID._baseDataID = l2d_BaseDataID.getID("DST_BASE");
        }
        return l2d_BaseDataID._baseDataID;
    };
    l2d_BaseDataID._clear = function() {
        l2d_BaseDataID._keyValMap.clear();
        l2d_BaseDataID._baseDataID = null;
    };
    l2d_BaseDataID.getID = function(aC) {
        var aD = l2d_BaseDataID._keyValMap[aC];
        if (aD == null) {
            aD = new l2d_BaseDataID(aC);
            l2d_BaseDataID._keyValMap[aC] = aD;
        }
        return aD;
    };
    // l2d_BaseDataID.prototype._$Sm = function() {
    //     return new l2d_BaseDataID();
    // };

    function l2d_PartsDataID(aC) {
        if (live2d_initializing) {
            return;
        }
        l2d_BaseID.prototype.constructor.call(this, aC);
    }
    l2d_PartsDataID.prototype = new l2d_BaseID();
    l2d_PartsDataID._keyValMap = new Object();
    l2d_PartsDataID._clear = function() {
        l2d_PartsDataID._keyValMap.clear();
    };
    l2d_PartsDataID.getID = function(aC) {
        var aD = l2d_PartsDataID._keyValMap[aC];
        if (aD == null) {
            aD = new l2d_PartsDataID(aC);
            l2d_PartsDataID._keyValMap[aC] = aD;
        }
        return aD;
    };
    // l2d_PartsDataID.prototype._$Sm = function() {
    //     return new l2d_PartsDataID();
    // };

    function l2d_Live2DModelJS() {
        if (live2d_initializing) {
            return;
        }
        l2d_Live2DModelBase.prototype.constructor.call(this);
        this._drawParamJS = new l2d_drawParamJS();
    }
    l2d_Live2DModelJS.prototype = new l2d_Live2DModelBase();
    l2d_Live2DModelJS.loadModel = function(aD) {
        var aC = new l2d_Live2DModelJS();
        l2d_Live2DModelBase.loadModel_exe(aC, aD);
        return aC;
    };
    // l2d_Live2DModelJS._$eR = function() {
    //     var aC = new l2d_Live2DModelJS();
    //     return aC;
    // };
    // l2d_Live2DModelJS._$ud = function(aH) {
    //     var aE = new _$Y("../_$_d/_$e2/_$CP/_$_H._$y");
    //     if (aE.exists() == false) {
    //         throw new _$bm("_$e2 _$_ _$B _$1P :: " + aE._$HT());
    //     }
    //     var aC = ["../_$_d/_$e2/_$CP/_$_H.512/_$xH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$zH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$hH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$WH._$Z"];
    //     var aF = l2d_Live2DModelJS.loadModel(aE._$Sk());
    //     for (var aD = 0; aD < aC.length; aD++) {
    //         var aG = new _$Y(aC[aD]);
    //         if (aG.exists() == false) {
    //             throw new _$bm("_$e2 _$_ _$B _$1P :: " + aG._$HT());
    //         }
    //         aF.setTexture(aD, _$oT._$_R(aH, aG._$Sk()));
    //     }
    //     return aF;
    // };
    l2d_Live2DModelJS.prototype.setGL = function(aC) {
        this._drawParamJS.setGL(aC);
    };
    l2d_Live2DModelJS.prototype.setTransform = function(aC) {
        this._drawParamJS.setTransform(aC);
    };
    l2d_Live2DModelJS.prototype.draw = function() {
        this._modelContext.draw(this._drawParamJS);
    };
    l2d_Live2DModelJS.prototype._$Dj = function() {
        this._drawParamJS._$Dj();
    };
    l2d_Live2DModelJS.prototype.setTexture = function(aD, aC) {
        if (this._drawParamJS == null) {
            l2d_UtDebug.error("_$9P for QT _$IP / _$rg() is _$B _$5P!!");
        }
        this._drawParamJS.setTexture(aD, aC);
    };
    l2d_Live2DModelJS.prototype.setTexture = function(aD, aC) {
        if (this._drawParamJS == null) {
            l2d_UtDebug.error("_$9P for QT _$IP / _$rg() is _$B _$5P!!");
        }
        this._drawParamJS.setTexture(aD, aC);
    };
    l2d_Live2DModelJS.prototype.generateModelTextureNo = function() {
        return this._drawParamJS.generateModelTextureNo();
    };
    l2d_Live2DModelJS.prototype.releaseModelTextureNo = function(aC) {
        this._drawParamJS.releaseModelTextureNo(aC);
    };
    l2d_Live2DModelJS.prototype.getDrawParam = function() {
        return this._drawParamJS;
    };

    function l2d_param() {
        if (live2d_initializing) {
            return;
        }
        this._paramValueCount = 0;
        this._paramID = null;
        this._paramValueList = null;
        this._paramIndex = l2d_param._defaultParamIndex;
        this._$jd = -1;
        this._$nj = 0;
        this._$dP = 0;
    }
    l2d_param._defaultParamIndex = -2;
    l2d_param.prototype._initWithBufferReader = function(aC) {
        this._paramID = aC._getNextValue();
        this._paramValueCount = aC._getNextInt32();
        this._paramValueList = aC._getNextValue();
    };
    l2d_param.prototype.getParamIndex = function(aC) {
        if (this._$jd != aC) {
            this._paramIndex = l2d_param._defaultParamIndex;
        }
        return this._paramIndex;
    };
    l2d_param.prototype._$Hk = function(aD, aC) {
        this._paramIndex = aD;
        this._$jd = aC;
    };
    l2d_param.prototype.getParamID = function() {
        return this._paramID;
    };
    l2d_param.prototype._setParamID = function(aC) {
        this._paramID = aC;
    };
    l2d_param.prototype._getParamValueCount = function() {
        return this._paramValueCount;
    };
    l2d_param.prototype._getParamValueList = function() {
        return this._paramValueList;
    };
    l2d_param.prototype._setParamValue = function(aD, aC) {
        this._paramValueCount = aD;
        this._paramValueList = aC;
    };
    l2d_param.prototype._$Td = function() {
        return this._$nj;
    };
    l2d_param.prototype._$Ld = function(aC) {
        this._$nj = aC;
    };
    l2d_param.prototype._$gT = function() {
        return this._$dP;
    };
    l2d_param.prototype._$VT = function(aC) {
        this._$dP = aC;
    };

    function l2d_BaseID(aC) {
        if (live2d_initializing) {
            return;
        }
        this.id = aC;
    }
    l2d_BaseID._dispose = function() {
        l2d_ParamID._clear();
        l2d_BaseDataID._clear();
        l2d_DrawDataID._clear();
        l2d_PartsDataID._clear();
    };
    l2d_BaseID.prototype.toString = function() {
        return this.id;
    };

    // function H() {
    //     if (live2d_initializing) {
    //         return;
    //     }
    //     this.color = null;
    // }
    function X() {
        if (live2d_initializing) {
            return;
        }
        c.prototype.constructor.call(this);
        this._$Xg = null;
        this._$92 = null;
    }
    X.prototype = new c();
    X._$rR = new Float32Array(2);
    X._$PR = new Float32Array(2);
    X._$2R = new Float32Array(2);
    X._$TR = new Float32Array(2);
    X._$fR = new Float32Array(2);
    X._$HR = new Float32Array(2);
    X._$sf = new Array();
    X.prototype._initialize = function() {
        this._$Xg = new g();
        this._$Xg._initialize();
        this._$92 = new Array();
    };
    X.prototype.getType = function() {
        return c._type1;
    };
    X.prototype._initWithBufferReader = function(aC) {
        c.prototype._initWithBufferReader.call(this, aC);
        this._$Xg = aC._getNextValue();
        this._$92 = aC._getNextValue();
        c.prototype.readV2_opacity.call(this, aC);
    };
    X.prototype.init = function(aC) {
        var aD = new ag(this);
        aD._$9d = new T();
        if (this._$Sj()) {
            aD._$ld = new T();
        }
        return aD;
    };
    X.prototype._$td = function(ba, bs) {
        if (!((this == bs._$Xf()))) {
            console.log("### assert!! ### ");
        }
        var bh = bs;
        if (!this._$Xg._$1d(ba)) {
            return;
        }
        var br = X._$sf;
        br[0] = false;
        var aX = this._$Xg._$6j(ba, br);
        bs._$4k(br[0]);
        this.interpolateOpacity(ba, this._$Xg, bs, br);
        var aY = ba.getTmpPivotTableIndicesRef();
        var a5 = ba.getTmpT_ArrayRef();
        this._$Xg._$pd(aY, a5, aX);
        if (aX <= 0) {
            var bi = this._$92[aY[0]];
            bh._$9d.init(bi);
        } else {
            if (aX == 1) {
                var bi = this._$92[aY[0]];
                var bg = this._$92[aY[1]];
                var a4 = a5[0];
                bh._$9d._$qT = bi._$qT + (bg._$qT - bi._$qT) * a4;
                bh._$9d._$sT = bi._$sT + (bg._$sT - bi._$sT) * a4;
                bh._$9d._$c2 = bi._$c2 + (bg._$c2 - bi._$c2) * a4;
                bh._$9d._$p2 = bi._$p2 + (bg._$p2 - bi._$p2) * a4;
                bh._$9d._$Mf = bi._$Mf + (bg._$Mf - bi._$Mf) * a4;
            } else {
                if (aX == 2) {
                    var bi = this._$92[aY[0]];
                    var bg = this._$92[aY[1]];
                    var aW = this._$92[aY[2]];
                    var aV = this._$92[aY[3]];
                    var a4 = a5[0];
                    var a3 = a5[1];
                    var bx = bi._$qT + (bg._$qT - bi._$qT) * a4;
                    var bw = aW._$qT + (aV._$qT - aW._$qT) * a4;
                    bh._$9d._$qT = bx + (bw - bx) * a3;
                    bx = bi._$sT + (bg._$sT - bi._$sT) * a4;
                    bw = aW._$sT + (aV._$sT - aW._$sT) * a4;
                    bh._$9d._$sT = bx + (bw - bx) * a3;
                    bx = bi._$c2 + (bg._$c2 - bi._$c2) * a4;
                    bw = aW._$c2 + (aV._$c2 - aW._$c2) * a4;
                    bh._$9d._$c2 = bx + (bw - bx) * a3;
                    bx = bi._$p2 + (bg._$p2 - bi._$p2) * a4;
                    bw = aW._$p2 + (aV._$p2 - aW._$p2) * a4;
                    bh._$9d._$p2 = bx + (bw - bx) * a3;
                    bx = bi._$Mf + (bg._$Mf - bi._$Mf) * a4;
                    bw = aW._$Mf + (aV._$Mf - aW._$Mf) * a4;
                    bh._$9d._$Mf = bx + (bw - bx) * a3;
                } else {
                    if (aX == 3) {
                        var aK = this._$92[aY[0]];
                        var aJ = this._$92[aY[1]];
                        var bp = this._$92[aY[2]];
                        var bn = this._$92[aY[3]];
                        var aF = this._$92[aY[4]];
                        var aE = this._$92[aY[5]];
                        var be = this._$92[aY[6]];
                        var bd = this._$92[aY[7]];
                        var a4 = a5[0];
                        var a3 = a5[1];
                        var a1 = a5[2];
                        var bx = aK._$qT + (aJ._$qT - aK._$qT) * a4;
                        var bw = bp._$qT + (bn._$qT - bp._$qT) * a4;
                        var bu = aF._$qT + (aE._$qT - aF._$qT) * a4;
                        var bt = be._$qT + (bd._$qT - be._$qT) * a4;
                        bh._$9d._$qT = (1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3);
                        bx = aK._$sT + (aJ._$sT - aK._$sT) * a4;
                        bw = bp._$sT + (bn._$sT - bp._$sT) * a4;
                        bu = aF._$sT + (aE._$sT - aF._$sT) * a4;
                        bt = be._$sT + (bd._$sT - be._$sT) * a4;
                        bh._$9d._$sT = (1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3);
                        bx = aK._$c2 + (aJ._$c2 - aK._$c2) * a4;
                        bw = bp._$c2 + (bn._$c2 - bp._$c2) * a4;
                        bu = aF._$c2 + (aE._$c2 - aF._$c2) * a4;
                        bt = be._$c2 + (bd._$c2 - be._$c2) * a4;
                        bh._$9d._$c2 = (1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3);
                        bx = aK._$p2 + (aJ._$p2 - aK._$p2) * a4;
                        bw = bp._$p2 + (bn._$p2 - bp._$p2) * a4;
                        bu = aF._$p2 + (aE._$p2 - aF._$p2) * a4;
                        bt = be._$p2 + (bd._$p2 - be._$p2) * a4;
                        bh._$9d._$p2 = (1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3);
                        bx = aK._$Mf + (aJ._$Mf - aK._$Mf) * a4;
                        bw = bp._$Mf + (bn._$Mf - bp._$Mf) * a4;
                        bu = aF._$Mf + (aE._$Mf - aF._$Mf) * a4;
                        bt = be._$Mf + (bd._$Mf - be._$Mf) * a4;
                        bh._$9d._$Mf = (1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3);
                    } else {
                        if (aX == 4) {
                            var aO = this._$92[aY[0]];
                            var aN = this._$92[aY[1]];
                            var bz = this._$92[aY[2]];
                            var by = this._$92[aY[3]];
                            var aI = this._$92[aY[4]];
                            var aH = this._$92[aY[5]];
                            var bk = this._$92[aY[6]];
                            var bj = this._$92[aY[7]];
                            var bc = this._$92[aY[8]];
                            var bb = this._$92[aY[9]];
                            var aT = this._$92[aY[10]];
                            var aR = this._$92[aY[11]];
                            var a2 = this._$92[aY[12]];
                            var a0 = this._$92[aY[13]];
                            var aM = this._$92[aY[14]];
                            var aL = this._$92[aY[15]];
                            var a4 = a5[0];
                            var a3 = a5[1];
                            var a1 = a5[2];
                            var aZ = a5[3];
                            var bx = aO._$qT + (aN._$qT - aO._$qT) * a4;
                            var bw = bz._$qT + (by._$qT - bz._$qT) * a4;
                            var bu = aI._$qT + (aH._$qT - aI._$qT) * a4;
                            var bt = bk._$qT + (bj._$qT - bk._$qT) * a4;
                            var bq = bc._$qT + (bb._$qT - bc._$qT) * a4;
                            var bo = aT._$qT + (aR._$qT - aT._$qT) * a4;
                            var bm = a2._$qT + (a0._$qT - a2._$qT) * a4;
                            var bl = aM._$qT + (aL._$qT - aM._$qT) * a4;
                            bh._$9d._$qT = (1 - aZ) * ((1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3)) + aZ * ((1 - a1) * (bq + (bo - bq) * a3) + a1 * (bm + (bl - bm) * a3));
                            bx = aO._$sT + (aN._$sT - aO._$sT) * a4;
                            bw = bz._$sT + (by._$sT - bz._$sT) * a4;
                            bu = aI._$sT + (aH._$sT - aI._$sT) * a4;
                            bt = bk._$sT + (bj._$sT - bk._$sT) * a4;
                            bq = bc._$sT + (bb._$sT - bc._$sT) * a4;
                            bo = aT._$sT + (aR._$sT - aT._$sT) * a4;
                            bm = a2._$sT + (a0._$sT - a2._$sT) * a4;
                            bl = aM._$sT + (aL._$sT - aM._$sT) * a4;
                            bh._$9d._$sT = (1 - aZ) * ((1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3)) + aZ * ((1 - a1) * (bq + (bo - bq) * a3) + a1 * (bm + (bl - bm) * a3));
                            bx = aO._$c2 + (aN._$c2 - aO._$c2) * a4;
                            bw = bz._$c2 + (by._$c2 - bz._$c2) * a4;
                            bu = aI._$c2 + (aH._$c2 - aI._$c2) * a4;
                            bt = bk._$c2 + (bj._$c2 - bk._$c2) * a4;
                            bq = bc._$c2 + (bb._$c2 - bc._$c2) * a4;
                            bo = aT._$c2 + (aR._$c2 - aT._$c2) * a4;
                            bm = a2._$c2 + (a0._$c2 - a2._$c2) * a4;
                            bl = aM._$c2 + (aL._$c2 - aM._$c2) * a4;
                            bh._$9d._$c2 = (1 - aZ) * ((1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3)) + aZ * ((1 - a1) * (bq + (bo - bq) * a3) + a1 * (bm + (bl - bm) * a3));
                            bx = aO._$p2 + (aN._$p2 - aO._$p2) * a4;
                            bw = bz._$p2 + (by._$p2 - bz._$p2) * a4;
                            bu = aI._$p2 + (aH._$p2 - aI._$p2) * a4;
                            bt = bk._$p2 + (bj._$p2 - bk._$p2) * a4;
                            bq = bc._$p2 + (bb._$p2 - bc._$p2) * a4;
                            bo = aT._$p2 + (aR._$p2 - aT._$p2) * a4;
                            bm = a2._$p2 + (a0._$p2 - a2._$p2) * a4;
                            bl = aM._$p2 + (aL._$p2 - aM._$p2) * a4;
                            bh._$9d._$p2 = (1 - aZ) * ((1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3)) + aZ * ((1 - a1) * (bq + (bo - bq) * a3) + a1 * (bm + (bl - bm) * a3));
                            bx = aO._$Mf + (aN._$Mf - aO._$Mf) * a4;
                            bw = bz._$Mf + (by._$Mf - bz._$Mf) * a4;
                            bu = aI._$Mf + (aH._$Mf - aI._$Mf) * a4;
                            bt = bk._$Mf + (bj._$Mf - bk._$Mf) * a4;
                            bq = bc._$Mf + (bb._$Mf - bc._$Mf) * a4;
                            bo = aT._$Mf + (aR._$Mf - aT._$Mf) * a4;
                            bm = a2._$Mf + (a0._$Mf - a2._$Mf) * a4;
                            bl = aM._$Mf + (aL._$Mf - aM._$Mf) * a4;
                            bh._$9d._$Mf = (1 - aZ) * ((1 - a1) * (bx + (bw - bx) * a3) + a1 * (bu + (bt - bu) * a3)) + aZ * ((1 - a1) * (bq + (bo - bq) * a3) + a1 * (bm + (bl - bm) * a3));
                        } else {
                            var aQ = Math.pow(2, aX) | 0;
                            var aU = new Float32Array(aQ);
                            for (var bf = 0; bf < aQ; bf++) {
                                var aD = bf;
                                var aC = 1;
                                for (var aG = 0; aG < aX; aG++) {
                                    aC *= (aD % 2 == 0) ? (1 - a5[aG]) : a5[aG];
                                    aD /= 2;
                                }
                                aU[bf] = aC;
                            }
                            var bv = new Array();
                            for (var aP = 0; aP < aQ; aP++) {
                                bv[aP] = this._$92[aY[aP]];
                            }
                            var a9 = 0,
                                a7 = 0,
                                a8 = 0,
                                a6 = 0,
                                aS = 0;
                            for (var aP = 0; aP < aQ; aP++) {
                                a9 += aU[aP] * bv[aP]._$qT;
                                a7 += aU[aP] * bv[aP]._$sT;
                                a8 += aU[aP] * bv[aP]._$c2;
                                a6 += aU[aP] * bv[aP]._$p2;
                                aS += aU[aP] * bv[aP]._$Mf;
                            }
                            bh._$9d._$qT = a9;
                            bh._$9d._$sT = a7;
                            bh._$9d._$c2 = a8;
                            bh._$9d._$p2 = a6;
                            bh._$9d._$Mf = aS;
                        }
                    }
                }
            }
        }
        var bi = this._$92[aY[0]];
        bh._$9d.reflectX = bi.reflectX;
        bh._$9d.reflectY = bi.reflectY;
    };
    X.prototype._$jk = function(aH, aC) {
        if (!((this == aC._$Xf()))) {
            console.log("### assert!! ### ");
        }
        var aM = aC;
        aM._$vg(true);
        if (!this._$Sj()) {
            aM.setTotalScale_notForClient(aM._$9d._$c2);
            aM.setTotalOpacity(aM.getInterpolatedOpacity());
        } else {
            var aO = this.getTargetBaseDataID();
            if (aM._$Fd == c._$5d) {
                aM._$Fd = aH.getBaseDataIndex(aO);
            }
            if (aM._$Fd < 0) {
                if (l2d_Live2D.L2D_VERBOSE) {
                    l2d_UtDebug.error("_$T _$2H _$X :: %s", aO);
                }
                aM._$vg(false);
            } else {
                var aD = aH.getBaseData(aM._$Fd);
                if (aD != null) {
                    var aG = aH.getBaseContext(aM._$Fd);
                    var aN = X._$rR;
                    aN[0] = aM._$9d._$qT;
                    aN[1] = aM._$9d._$sT;
                    var aE = X._$PR;
                    aE[0] = 0;
                    aE[1] = -0.1;
                    var aJ = aG._$Xf().getType();
                    if (aJ == c._type1) {
                        aE[1] = -10;
                    } else {
                        aE[1] = -0.1;
                    }
                    var aL = X._$2R;
                    this._$Gd(aH, aD, aG, aN, aE, aL);
                    var aK = l2d_math._$Ej(aE, aL);
                    aD._$ok(aH, aG, aN, aN, 1, 0, 2);
                    aM._$ld._$qT = aN[0];
                    aM._$ld._$sT = aN[1];
                    aM._$ld._$c2 = aM._$9d._$c2;
                    aM._$ld._$p2 = aM._$9d._$p2;
                    aM._$ld._$Mf = aM._$9d._$Mf - aK * l2d_math._radian2degree_factor;
                    var aF = aG.getTotalScale();
                    aM.setTotalScale_notForClient(aF * aM._$ld._$c2);
                    var aI = aG.getTotalOpacity();
                    aM.setTotalOpacity(aI * aM.getInterpolatedOpacity());
                    aM._$ld.reflectX = aM._$9d.reflectX;
                    aM._$ld.reflectY = aM._$9d.reflectY;
                    aM._$vg(aG._$7R());
                } else {
                    aM._$vg(false);
                }
            }
        }
    };
    X.prototype._$ok = function(aE, aM, aG, aZ, aO, aJ, aX) {
        if (!((this == aM._$Xf()))) {
            console.log("### assert!! ### ");
        }
        var aC = aM;
        var aP = aC._$ld != null ? aC._$ld : aC._$9d;
        var aV = Math.sin(l2d_math._degree2radian_factor * aP._$Mf);
        var aK = Math.cos(l2d_math._degree2radian_factor * aP._$Mf);
        var aY = aC.getTotalScale();
        var aR = aP.reflectX ? -1 : 1;
        var aQ = aP.reflectY ? -1 : 1;
        var aN = aK * aY * aR;
        var aL = -aV * aY * aQ;
        var aW = aV * aY * aR;
        var aU = aK * aY * aQ;
        var aT = aP._$qT;
        var aS = aP._$sT;
        var aI, aH;
        var aD = aO * aX;
        for (var aF = aJ; aF < aD; aF += aX) {
            aI = aG[aF];
            aH = aG[aF + 1];
            aZ[aF] = aN * aI + aL * aH + aT;
            aZ[aF + 1] = aW * aI + aU * aH + aS;
        }
    };
    X.prototype._$Gd = function(aK, aF, aD, aM, aL, aC) {
        if (!((aF == aD._$Xf()))) {
            console.log("### assert!! ### ");
        }
        var aJ = X._$TR;
        X._$TR[0] = aM[0];
        X._$TR[1] = aM[1];
        aF._$ok(aK, aD, aJ, aJ, 1, 0, 2);
        var aG = X._$fR;
        var aN = X._$HR;
        var aI = 10;
        var aE = 1;
        for (var aH = 0; aH < aI; aH++) {
            aN[0] = aM[0] + aE * aL[0];
            aN[1] = aM[1] + aE * aL[1];
            aF._$ok(aK, aD, aN, aG, 1, 0, 2);
            aG[0] -= aJ[0];
            aG[1] -= aJ[1];
            if (aG[0] != 0 || aG[1] != 0) {
                aC[0] = aG[0];
                aC[1] = aG[1];
                return;
            }
            aN[0] = aM[0] - aE * aL[0];
            aN[1] = aM[1] - aE * aL[1];
            aF._$ok(aK, aD, aN, aG, 1, 0, 2);
            aG[0] -= aJ[0];
            aG[1] -= aJ[1];
            if (aG[0] != 0 || aG[1] != 0) {
                aG[0] = -aG[0];
                aG[0] = -aG[0];
                aC[0] = aG[0];
                aC[1] = aG[1];
                return;
            }
            aE *= 0.1;
        }
        if (l2d_Live2D.L2D_VERBOSE) {
            console.log("_$T2 to transform _$gH\n");
        }
    };

    function ag(aC) {
        A.prototype.constructor.call(this, aC);
        this._$Fd = c._$5d;
        this._$9d = null;
        this._$ld = null;
    }
    ag.prototype = new A();

    function l2d_AMotion() {
        if (live2d_initializing) {
            return;
        }
        this._fadeIn = null;
        this._fadeOut = null;
        this._$N2 = null;
        this._fadeIn = 1000;
        this._fadeOut = 1000;
        this._$N2 = 1;
        this._$Q2();
    }
    l2d_AMotion._$Gf = function(aK, aI, aJ) {
        var aL = aK / aI;
        var aW = aJ / aI;
        var aP = aW;
        var aU = 1 / 3;
        var aM = 2 / 3;
        var aV = 1 - (1 - aW) * (1 - aW);
        var aX = 1 - (1 - aP) * (1 - aP);
        var aH = 0;
        var aG = ((1 - aW) * aU) * aV + (aP * aM + (1 - aP) * aU) * (1 - aV);
        var aF = (aP + (1 - aP) * aM) * aX + (aW * aU + (1 - aW) * aM) * (1 - aX);
        var aE = 1;
        var aT = aE - 3 * aF + 3 * aG - aH;
        var aS = 3 * aF - 6 * aG + 3 * aH;
        var aR = 3 * aG - 3 * aH;
        var aQ = aH;
        if (aL <= 0) {
            return 0;
        } else {
            if (aL >= 1) {
                return 1;
            }
        }
        var aN = aL;
        var aD = aN * aN;
        var aC = aN * aD;
        var aO = aT * aC + aS * aD + aR * aN + aQ;
        return aO;
    };
    l2d_AMotion.prototype._$Q2 = function() {};
    l2d_AMotion.prototype.setFadeIn = function(aC) {
        this._fadeIn = aC;
    };
    l2d_AMotion.prototype.setFadeOut = function(aC) {
        this._fadeOut = aC;
    };
    l2d_AMotion.prototype._$Wf = function(aC) {
        this._$N2 = aC;
    };
    l2d_AMotion.prototype.getFadeOut = function() {
        return this._fadeOut;
    };
    // l2d_AMotion.prototype._$if = function() {
    //     return this._fadeOut;
    // };
    l2d_AMotion.prototype._$Kf = function() {
        return this._$N2;
    };
    l2d_AMotion.prototype.getDurationMSec = function() {
        return -1;
    };
    l2d_AMotion.prototype.getLoopDurationMSec = function() {
        return -1;
    };
    l2d_AMotion.prototype.updateParam = function(aE, aI) {
        if (!aI._$Vf || aI._finished) {
            return;
        }
        var aG = l2d_UtSystem.getUserTimeMSec();
        if (aI._$pj < 0) {
            aI._$pj = aG;
            aI._$km = aG;
            var aH = this.getDurationMSec();
            if (aI._finish_time < 0) {
                aI._finish_time = (aH <= 0) ? -1 : aI._$pj + aH;
            }
        }
        var aD = this._$N2;
        var aC = (this._fadeIn == 0) ? 1 : z._cos_curve(((aG - aI._$km) / (this._fadeIn)));
        var aF = (this._fadeOut == 0 || aI._finish_time < 0) ? 1 : z._cos_curve(((aI._finish_time - aG) / (this._fadeOut)));
        aD = aD * aC * aF;
        if (!((0 <= aD && aD <= 1))) {
            console.log("### assert!! ### ");
        }
        this.updateParamExe(aE, aG, aD, aI);
        if (aI._finish_time > 0 && aI._finish_time < aG) {
            aI._finished = true;
        }
    };
    l2d_AMotion.prototype.updateParamExe = function(aC, aD, aE, aF) {};

    function l2d_ParamID(aC) {
        if (live2d_initializing) {
            return;
        }
        l2d_BaseID.prototype.constructor.call(this, aC);
    }
    l2d_ParamID.prototype = new l2d_BaseID();
    l2d_ParamID._keyValMap = new Object();
    l2d_ParamID._clear = function() {
        l2d_ParamID._keyValMap.clear();
    };
    l2d_ParamID.getID = function(aC) {
        var aD = l2d_ParamID._keyValMap[aC];
        if (aD == null) {
            aD = new l2d_ParamID(aC);
            l2d_ParamID._keyValMap[aC] = aD;
        }
        return aD;
    };
    // l2d_ParamID.prototype._$Sm = function() {
    //     return new l2d_ParamID();
    // };

    function al() {
        if (live2d_initializing) {
            return;
        }
        this._partsID = null;
        this._baseDataList = null;
        this._drawDataList = null;
        al._instance_count++;
    }
    al._instance_count = 0;
    al.prototype._$Zk = function() {
        return this._baseDataList;
    };
    al.prototype.getDrawDataList = function() {
        return this._drawDataList;
    };
    al.prototype._initWithBufferReader = function(aC) {
        this._partsID = aC._getNextValue();
        this._drawDataList = aC._getNextValue();
        this._baseDataList = aC._getNextValue();
    };
    al.prototype._$Id = function(aC) {
        aC.setBaseData(this._baseDataList);
        aC.setDrawData(this._drawDataList);
        this._baseDataList = null;
        this._drawDataList = null;
    };

    function sys_env() {}
    sys_env._$lj = 0;
    sys_env.SYSTEM_INFO = null;
    sys_env.USER_AGENT = navigator.userAgent;
    sys_env.isIPhone = function() {
        if (!sys_env.SYSTEM_INFO) {
            sys_env.setup();
        }
        return sys_env.SYSTEM_INFO._isIPhone;
    };
    sys_env.isIOS = function() {
        if (!sys_env.SYSTEM_INFO) {
            sys_env.setup();
        }
        return sys_env.SYSTEM_INFO._isIPhone || sys_env.SYSTEM_INFO._isIPad;
    };
    sys_env.isAndroid = function() {
        if (!sys_env.SYSTEM_INFO) {
            sys_env.setup();
        }
        return sys_env.SYSTEM_INFO._isAndroid;
    };
    sys_env.getOSVersion = function() {
        if (!sys_env.SYSTEM_INFO) {
            sys_env.setup();
        }
        return sys_env.SYSTEM_INFO.version;
    };
    sys_env.getOS = function() {
        if (!sys_env.SYSTEM_INFO) {
            sys_env.setup();
        }
        if (sys_env.SYSTEM_INFO._isIPhone || sys_env.SYSTEM_INFO._isIPad) {
            return "iOS";
        }
        if (sys_env.SYSTEM_INFO._isAndroid) {
            return "Android";
        } else {
            return "_$62 OS";
        }
    };
    sys_env.setup = function() {
        var aF = sys_env.USER_AGENT;

        function aD(aJ, aM) {
            var aI = aJ.substring(aM).split(/[ _,;\.]/);
            var aL = 0;
            for (var aH = 0; aH <= 2; aH++) {
                if (isNaN(aI[aH])) {
                    break;
                }
                var aK = parseInt(aI[aH]);
                if (aK < 0 || aK > 999) {
                    l2d_UtDebug.error("err : " + aK + " @UtHtml5.setup()");
                    aL = 0;
                    break;
                }
                aL += aK * Math.pow(1000, (2 - aH));
            }
            return aL;
        }
        var aG;
        var aC;
        var aE = sys_env.SYSTEM_INFO = {
            userAgent: aF
        };
        if ((aG = aF.indexOf("iPhone OS ")) >= 0) {
            aE.os = "iPhone";
            aE._isIPhone = true;
            aE.version = aD(aF, aG + "iPhone OS ".length);
        } else {
            if ((aG = aF.indexOf("iPad")) >= 0) {
                aG = aF.indexOf("CPU OS");
                if (aG < 0) {
                    l2d_UtDebug.error(" err : " + aF + " @UtHtml5.setup()");
                    return;
                }
                aE.os = "iPad";
                aE._isIPad = true;
                aE.version = aD(aF, aG + "CPU OS ".length);
            } else {
                if ((aG = aF.indexOf("Android")) >= 0) {
                    aE.os = "Android";
                    aE._isAndroid = true;
                    aE.version = aD(aF, aG + "Android ".length);
                } else {
                    aE.os = "-";
                    aE.version = -1;
                }
            }
        }
    };

    function z() {}
    z._cos_curve = function(aC) {
        if (aC < 0) {
            return 0;
        } else {
            if (aC > 1) {
                return 1;
            }
        }
        return (0.5 - 0.5 * Math.cos(aC * l2d_math.PI_F));
    };
    var Y = function() {};
    Y._$oP = function(aG, aE, aM, aL, aF, aD, aC, aN, aI) {
        var aH = (aC * aD - aN * aF);
        if (aH == 0) {
            return null;
        } else {
            var aJ = ((aG - aM) * aD - (aE - aL) * aF) / aH;
            var aK;
            if (aF != 0) {
                aK = (aG - aM - aJ * aC) / aF;
            } else {
                aK = (aE - aL - aJ * aN) / aD;
            }
            if (isNaN(aK)) {
                aK = (aG - aM - aJ * aC) / aF;
                if (isNaN(aK)) {
                    aK = (aE - aL - aJ * aN) / aD;
                }
                if (isNaN(aK)) {
                    console.log("a is NaN @UtVector#_$oP() ");
                    console.log("v1x : " + aF);
                    console.log("v1x != 0 ? " + (aF != 0));
                }
            }
            if (aI == null) {
                return new Array(aK, aJ);
            } else {
                aI[0] = aK;
                aI[1] = aJ;
                return aI;
            }
        }
    };

    function l2d_bufferReader(aC) {
        if (live2d_initializing) {
            return;
        }
        // this._$H = new Int8Array(8);
        // this._$C2 = new DataView(this._$H.buffer);
        // this._$SP = new Int8Array(1000);
        this._bitOffset = 0;
        this._currentInt8 = 0;
        this._formatVersion = 0;
        this._valueListOfJ = new Array();
        this._dataView = aC;
        this._dataOffset = 0;
    }
    l2d_bufferReader.prototype._nextIntDynamic = function() {
        var aF = this._getNextInt8();
        var aE, aD, aC;
        if ((aF & 128) == 0) {
            return aF & 255;
        } else {
            if (((aE = this._getNextInt8()) & 128) == 0) {
                return ((aF & 127) << 7) | (aE & 127);
            } else {
                if (((aD = this._getNextInt8()) & 128) == 0) {
                    return ((aF & 127) << 14) | ((aE & 127) << 7) | (aD & 255);
                } else {
                    if (((aC = this._getNextInt8()) & 128) == 0) {
                        return ((aF & 127) << 21) | ((aE & 127) << 14) | ((aD & 127) << 7) | (aC & 255);
                    } else {
                        throw new I("Not supported  _");
                    }
                }
            }
        }
    };
    l2d_bufferReader.prototype.getFormatVersion = function() {
        return this._formatVersion;
    };
    l2d_bufferReader.prototype._setFormatVersion = function(aC) {
        this._formatVersion = aC;
    };
    l2d_bufferReader.prototype._getNextIntDynamic = function() {
        return this._nextIntDynamic();
    };
    l2d_bufferReader.prototype._getNextFloat64 = function() {
        this._resetBitOffset();
        this._dataOffset += 8;
        return this._dataView.getFloat64(this._dataOffset - 8);
    };
    l2d_bufferReader.prototype._getNextFloat32 = function() {
        this._resetBitOffset();
        this._dataOffset += 4;
        return this._dataView.getFloat32(this._dataOffset - 4);
    };
    l2d_bufferReader.prototype._getNextInt32 = function() {
        this._resetBitOffset();
        this._dataOffset += 4;
        return this._dataView.getInt32(this._dataOffset - 4);
    };
    l2d_bufferReader.prototype._getNextInt8 = function() {
        this._resetBitOffset();
        return this._dataView.getInt8(this._dataOffset++);
    };
    l2d_bufferReader.prototype._getNextInt16 = function() {
        this._resetBitOffset();
        this._dataOffset += 2;
        return this._dataView.getInt16(this._dataOffset - 2);
    };
    // l2d_bufferReader.prototype._$jf = function() {
    //     this._resetBitOffset();
    //     this._dataOffset += 8;
    //     throw new I("_$T _$M read long");
    // };
    l2d_bufferReader.prototype._getNextBool8 = function() {
        this._resetBitOffset();
        return this._dataView.getInt8(this._dataOffset++) != 0;
    };
    var N = true;
    l2d_bufferReader.prototype._getNextStr_utf8 = function() {
        this._resetBitOffset();
        var aC = this._getNextIntDynamic();
        var aF = null;
        if (N) {
            try {
                var aH = new ArrayBuffer(aC * 2);
                aF = new Uint16Array(aH);
                for (var aE = 0; aE < aC; ++aE) {
                    aF[aE] = this._dataView.getUint8(this._dataOffset++);
                }
                return String.fromCharCode.apply(null, aF);
            } catch (aG) {
                N = false;
            }
        }
        try {
            var aD = new Array();
            if (aF == null) {
                for (var aE = 0; aE < aC; ++aE) {
                    aD[aE] = this._dataView.getUint8(this._dataOffset++);
                }
            } else {
                for (var aE = 0; aE < aC; ++aE) {
                    aD[aE] = aF[aE];
                }
            }
            return String.fromCharCode.apply(null, aD);
        } catch (aG) {
            console.log("read utf8 / _$df _$T2 !! : " + aG);
        }
    };
    l2d_bufferReader.prototype._getNextArr_int32 = function() {
        this._resetBitOffset();
        var aD = this._getNextIntDynamic();
        var aC = new Int32Array(aD);
        for (var aE = 0; aE < aD; aE++) {
            aC[aE] = this._dataView.getInt32(this._dataOffset);
            this._dataOffset += 4;
        }
        return aC;
    };
    l2d_bufferReader.prototype._getNextArr_float32 = function() {
        this._resetBitOffset();
        var aD = this._getNextIntDynamic();
        var aC = new Float32Array(aD);
        for (var aE = 0; aE < aD; aE++) {
            aC[aE] = this._dataView.getFloat32(this._dataOffset);
            this._dataOffset += 4;
        }
        return aC;
    };
    l2d_bufferReader.prototype._getNextArr_float64 = function() {
        this._resetBitOffset();
        var aD = this._getNextIntDynamic();
        var aC = new Float64Array(aD);
        for (var aE = 0; aE < aD; aE++) {
            aC[aE] = this._dataView.getFloat64(this._dataOffset);
            this._dataOffset += 8;
        }
        return aC;
    };
    l2d_bufferReader.prototype._getNextValue = function() {
        return this._getValueByType(-1);
    };
    l2d_bufferReader.prototype._getValueByType = function(aE) {
        this._resetBitOffset();
        if (aE < 0) {
            aE = this._getNextIntDynamic();
        }
        if (aE == l2d_global_format._some_cached_value_type_33) {
            var aC = this._getNextInt32();
            if (0 <= aC && aC < this._valueListOfJ.length) {
                return this._valueListOfJ[aC];
            } else {
                throw new I("illegal refNo @Breader");
            }
        } else {
            var aD = this._getNextValByType(aE);
            this._valueListOfJ.push(aD);
            return aD;
        }
    };
    l2d_bufferReader.prototype._getNextValByType = function(aI) {
        if (aI == 0) {
            return null;
        }
        if (aI == 50) {
            var aF = this._getNextStr_utf8();
            var aD = l2d_DrawDataID.getID(aF);
            return aD;
        } else {
            if (aI == 51) {
                var aF = this._getNextStr_utf8();
                var aD = l2d_BaseDataID.getID(aF);
                return aD;
            } else {
                if (aI == 134) {
                    var aF = this._getNextStr_utf8();
                    var aD = l2d_PartsDataID.getID(aF);
                    return aD;
                } else {
                    if (aI == 60) {
                        var aF = this._getNextStr_utf8();
                        var aD = l2d_ParamID.getID(aF);
                        return aD;
                    }
                }
            }
        }
        if (aI >= 48) {
            var aG = l2d_global_format._new_obj_with_type(aI);
            if (aG != null) {
                aG._initWithBufferReader(this);
                return aG;
            } else {
                return null;
            }
        }
        switch (aI) {
        case 1:
            return this._getNextStr_utf8();
        case 10:
            var aH = this._getNextInt32();
            // return new H(aH, true);
            throw new I("_$B _$M : _getNextValue() of 10 : " + aI);
        case 11:
            return new l2d_rect(this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64());
        case 12:
            return new l2d_rect(this._getNextFloat32(), this._getNextFloat32(), this._getNextFloat32(), this._getNextFloat32());
        case 13:
            return new l2d_point(this._getNextFloat64(), this._getNextFloat64());
        case 14:
            return new l2d_point(this._getNextFloat32(), this._getNextFloat32());
        case 15:
            var aC = this._getNextIntDynamic();
            var aD = new Array(aC);
            for (var aE = 0; aE < aC; aE++) {
                aD[aE] = this._getNextValue();
            }
            return aD;
        case 17:
            var aD = new ay(this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64(), this._getNextFloat64());
            return aD;
        case 21:
            return new l2d_rect(this._getNextInt32(), this._getNextInt32(), this._getNextInt32(), this._getNextInt32());
        case 22:
            return new l2d_point(this._getNextInt32(), this._getNextInt32());
        case 23:
            throw new Error("Not Implemented ");
        case 16:
        case 25:
            return this._getNextArr_int32();
        case 26:
            return this._getNextArr_float64();
        case 27:
            return this._getNextArr_float32();
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 18:
        case 19:
        case 20:
        case 24:
        case 28:
            throw new I("not impl : _getNextValue() of 2-9 ,18,19,20,24,28 : " + aI);
        default:
            throw new I("not impl : _getNextValue() NO DEF : " + aI);
        }
    };
    l2d_bufferReader.prototype._getNextBitFlag = function() {
        if (this._bitOffset == 0) {
            this._currentInt8 = this._getNextInt8();
        } else {
            if (this._bitOffset == 8) {
                this._currentInt8 = this._getNextInt8();
                this._bitOffset = 0;
            }
        }
        return ((this._currentInt8 >> (7 - this._bitOffset++)) & 1) == 1;
    };
    l2d_bufferReader.prototype._resetBitOffset = function() {
        if (this._bitOffset != 0) {
            this._bitOffset = 0;
        }
    };

    function l2d_drawParamBase() {
        if (live2d_initializing) {
            return;
        }
        this._$hk = l2d_drawParamBase._$Wm;
        this._baseColor_a = 1;
        this._baseColor_r = 1;
        this._baseColor_g = 1;
        this._baseColor_b = 1;
        this.culling = false;
        this.matrix4x4 = new Float32Array(16);
    }
    l2d_drawParamBase._$Wm = 32;
    l2d_drawParamBase.prototype._setupDraw = function() {};
    l2d_drawParamBase.prototype._drawTexture = function(aH, aF, aE, aG, aI, aD, aC) {};
    l2d_drawParamBase.prototype._generateModelTextureNo = function() {
        return -1;
    };
    l2d_drawParamBase.prototype._releaseModelTextureNo = function(aC) {};
    l2d_drawParamBase.prototype.setBaseColor = function(alpha, red, green, blue) {
        if (alpha < 0) {
            alpha = 0;
        } else {
            if (alpha > 1) {
                alpha = 1;
            }
        }
        if (red < 0) {
            red = 0;
        } else {
            if (red > 1) {
                red = 1;
            }
        }
        if (green < 0) {
            green = 0;
        } else {
            if (green > 1) {
                green = 1;
            }
        }
        if (blue < 0) {
            blue = 0;
        } else {
            if (blue > 1) {
                blue = 1;
            }
        }
        this._baseColor_a = aF;
        this._baseColor_r = aE;
        this._baseColor_g = aD;
        this._baseColor_b = aC;
    };
    l2d_drawParamBase.prototype._setCulling = function(aC) {
        this.culling = aC;
    };
    l2d_drawParamBase.prototype.setMatrix = function(aC) {
        for (var aD = 0; aD < 16; aD++) {
            this.matrix4x4[aD] = aC[aD];
        }
    };

    function l2d_value() {
        if (live2d_initializing) {
            return;
        }
        this._minValue = null;
        this._maxValue = null;
        this._defaultValue = null;
        this._paramID = null;
    }
    l2d_value.prototype._initWithBufferReader = function(aC) {
        this._minValue = aC._getNextFloat32();
        this._maxValue = aC._getNextFloat32();
        this._defaultValue = aC._getNextFloat32();
        this._paramID = aC._getNextValue();
    };
    l2d_value.prototype.getMinValue = function() {
        return this._minValue;
    };
    l2d_value.prototype.getMaxValue = function() {
        return this._maxValue;
    };
    l2d_value.prototype.getDefaultValue = function() {
        return this._defaultValue;
    };
    l2d_value.prototype.getParamID = function() {
        return this._paramID;
    };

    function l2d_math() {}
    // l2d_math._$jg = Math.PI / 180;
    l2d_math._degree2radian_factor = (Math.PI / 180);
    // l2d_math._$Lg = 180 / Math.PI;
    l2d_math._radian2degree_factor = (180 / Math.PI);
    l2d_math.PI_F = Math.PI;
    // l2d_math._$If = [0, 0.012368, 0.024734, 0.037097, 0.049454, 0.061803, 0.074143, 0.086471, 0.098786, 0.111087, 0.12337, 0.135634, 0.147877, 0.160098, 0.172295, 0.184465, 0.196606, 0.208718, 0.220798, 0.232844, 0.244854, 0.256827, 0.268761, 0.280654, 0.292503, 0.304308, 0.316066, 0.327776, 0.339436, 0.351044, 0.362598, 0.374097, 0.385538, 0.396921, 0.408243, 0.419502, 0.430697, 0.441826, 0.452888, 0.463881, 0.474802, 0.485651, 0.496425, 0.507124, 0.517745, 0.528287, 0.538748, 0.549126, 0.559421, 0.56963, 0.579752, 0.589785, 0.599728, 0.609579, 0.619337, 0.629, 0.638567, 0.648036, 0.657406, 0.666676, 0.675843, 0.684908, 0.693867, 0.70272, 0.711466, 0.720103, 0.72863, 0.737045, 0.745348, 0.753536, 0.76161, 0.769566, 0.777405, 0.785125, 0.792725, 0.800204, 0.807561, 0.814793, 0.821901, 0.828884, 0.835739, 0.842467, 0.849066, 0.855535, 0.861873, 0.868079, 0.874153, 0.880093, 0.885898, 0.891567, 0.897101, 0.902497, 0.907754, 0.912873, 0.917853, 0.922692, 0.92739, 0.931946, 0.936359, 0.940629, 0.944755, 0.948737, 0.952574, 0.956265, 0.959809, 0.963207, 0.966457, 0.96956, 0.972514, 0.97532, 0.977976, 0.980482, 0.982839, 0.985045, 0.987101, 0.989006, 0.990759, 0.992361, 0.993811, 0.995109, 0.996254, 0.997248, 0.998088, 0.998776, 0.999312, 0.999694, 0.999924, 1];
    l2d_math._$Ej = function(aF, aD) {
        var aC = Math.atan2(aF[1], aF[0]);
        var aE = Math.atan2(aD[1], aD[0]);
        return l2d_math._$eg(aC, aE);
    };
    l2d_math._$eg = function(aD, aC) {
        var aE = aD - aC;
        while (aE < -Math.PI) {
            aE += 2 * Math.PI;
        }
        while (aE > Math.PI) {
            aE -= 2 * Math.PI;
        }
        return aE;
    };
    // l2d_math._$E = function(aC) {
    //     return Math.sin(aC);
    // };

    function aq() {}
    aq._$8m = 1;
    aq._$6m = 2;
    aq._$Pj = 0;
    aq._$tR = 2;
    aq._$yR = aq._$8m;
    aq._$Tm = true;
    aq._$Zd = 5;
    aq._$6k = 65;
    aq._$G = 0.0001;
    aq._$Of = 0.001;
    aq._$gm = 3;

    // function C() {}
    // C.prototype._initWithBufferReader = function(aC) {};

    function l2d_DrawDataID(aC) {
        if (live2d_initializing) {
            return;
        }
        l2d_BaseID.prototype.constructor.call(this, aC);
    }
    l2d_DrawDataID.prototype = new l2d_BaseID();
    l2d_DrawDataID._keyValMap = new Object();
    l2d_DrawDataID._clear = function() {
        l2d_DrawDataID._keyValMap.clear();
    };
    l2d_DrawDataID.getID = function(aC) {
        var aD = l2d_DrawDataID._keyValMap[aC];
        if (aD == null) {
            aD = new l2d_DrawDataID(aC);
            l2d_DrawDataID._keyValMap[aC] = aD;
        }
        return aD;
    };
    // l2d_DrawDataID.prototype._$Sm = function() {
    //     return new l2d_DrawDataID();
    // };

    function l2d_point() {
        if (live2d_initializing) {
            return;
        }
        this.x = null;
        this.y = null;
    }
    l2d_point.prototype._setPoint = function(aC, aD) {
        this.x = aC;
        this.y = aD;
    };
    l2d_point.prototype._setPoint = function(aC) {
        this.x = aC.x;
        this.y = aC.y;
    };

    function l2d_rect() {
        if (live2d_initializing) {
            return;
        }
        this.x = null;
        this.y = null;
        this.width = null;
        this.height = null;
    }
    l2d_rect.prototype._getCenterX = function() {
        return this.x + 0.5 * this.width;
    };
    l2d_rect.prototype._getCenterY = function() {
        return this.y + 0.5 * this.height;
    };
    l2d_rect.prototype._getRightX = function() {
        return this.x + this.width;
    };
    l2d_rect.prototype._getBottomY = function() {
        return this.y + this.height;
    };
    l2d_rect.prototype._setRect = function(aD, aF, aE, aC) {
        this.x = aD;
        this.y = aF;
        this.width = aE;
        this.height = aC;
    };
    l2d_rect.prototype._setRect = function(aC) {
        this.x = aC.x;
        this.y = aC.y;
        this.width = aC.width;
        this.height = aC.height;
    };
    l2d_rect.prototype.contains = function(aC, aD) {
        return this.x <= this.x && this.y <= this.y && (this.x <= this.x + this.width) && (this.y <= this.y + this.height);
    };

    function l2d_model() {
        if (live2d_initializing) {
            return;
        }
        this._paramDefSet = null;
        this._partsDataList = null;
        this._model_width = 400;
        this._model_height = 400;
        l2d_model._instance_count++;
    }
    l2d_model._instance_count = 0;
    l2d_model.prototype._initialize = function() {
        if (this._paramDefSet == null) {
            this._paramDefSet = new l2d_ParamDefSet();
        }
        if (this._partsDataList == null) {
            this._partsDataList = new Array();
        }
    };
    l2d_model.prototype.getCanvasWidth = function() {
        return this._model_width;
    };
    l2d_model.prototype.getCanvasHeight = function() {
        return this._model_height;
    };
    l2d_model.prototype._initWithBufferReader = function(aC) {
        this._paramDefSet = aC._getNextValue();
        this._partsDataList = aC._getNextValue();
        this._model_width = aC._getNextInt32();
        this._model_height = aC._getNextInt32();
    };
    l2d_model.prototype._addPartsData = function(parts) {
        this._partsDataList.push(parts);
    };
    l2d_model.prototype._getPartsDataList = function() {
        return this._partsDataList;
    };
    l2d_model.prototype._getParamDefSet = function() {
        return this._paramDefSet;
    };

    function l2d_drawParamJS() {
        if (live2d_initializing) {
            return;
        }
        l2d_drawParamBase.prototype.constructor.call(this);
        this._$mk = new Int32Array(l2d_drawParamJS._$Vm);
        this._$1j = new Array();
        this.transform = null;
        this.gl = null;
        if (l2d_drawParamJS._$tf == null) {
            l2d_drawParamJS._$tf = l2d_drawParamJS._create_array_32f(256);
            l2d_drawParamJS._$zg = l2d_drawParamJS._create_array_32f(256);
            l2d_drawParamJS._$oR = l2d_drawParamJS._create_array_16i(256);
        }
    }
    l2d_drawParamJS.prototype = new l2d_drawParamBase();
    l2d_drawParamJS._$Vm = 32;
    l2d_drawParamJS._$Xd = false;
    l2d_drawParamJS._$tf = null;
    l2d_drawParamJS._$zg = null;
    l2d_drawParamJS._$oR = null;
    l2d_drawParamJS._create_array_32f = function(aC) {
        var aD = new Float32Array(aC);
        return aD;
    };
    l2d_drawParamJS._create_array_16i = function(aC) {
        var aD = new Int16Array(aC);
        return aD;
    };
    l2d_drawParamJS._$Ud = function(aD, aC) {
        if (aD == null || aD._$7T() < aC.length) {
            aD = l2d_drawParamJS._create_array_32f(aC.length * 2);
            aD.put(aC);
            aD._$Rf(0);
        } else {
            aD.clear();
            aD.put(aC);
            aD._$Rf(0);
        }
        return aD;
    };
    l2d_drawParamJS._$Kk = function(aD, aC) {
        if (aD == null || aD._$7T() < aC.length) {
            aD = l2d_drawParamJS._create_array_16i(aC.length * 2);
            aD.put(aC);
            aD._$Rf(0);
        } else {
            aD.clear();
            aD.put(aC);
            aD._$Rf(0);
        }
        return aD;
    };
    l2d_drawParamJS._$0m = function() {
        return l2d_drawParamJS._$Xd;
    };
    l2d_drawParamJS._$Qm = function(aC) {
        l2d_drawParamJS._$Xd = aC;
    };
    l2d_drawParamJS.prototype.setGL = function(aC) {
        this.gl = aC;
    };
    l2d_drawParamJS.prototype.setTransform = function(aC) {
        this.transform = aC;
    };
    l2d_drawParamJS.prototype._setupDraw = function() {};
    l2d_drawParamJS.prototype._drawTexture = function(aJ, aC, aK, aD, aL, aH, aF, aE) {
        if (aH < 0.01) {
            return;
        }
        var aG = this._$1j[aJ];
        var aI = aH > 0.9 ? l2d_Live2D.EXPAND_W : 0;
        this.gl.drawElements(aG, aK, aD, aL, aH, aI, this.transform, aE);
    };
    l2d_drawParamJS.prototype._generateModelTextureNo = function() {
        throw new Error("_generateModelTextureNo");
    };
    l2d_drawParamJS.prototype._releaseModelTextureNo = function(aC) {
        throw new Error("_releaseModelTextureNo");
    };
    l2d_drawParamJS.prototype._$Dj = function() {
        for (var aC = 0; aC < this._$mk.length; aC++) {
            var aD = this._$mk[aC];
            if (aD != 0) {
                this.gl._$gd(1, this._$mk, aC);
                this._$mk[aC] = 0;
            }
        }
    };
    l2d_drawParamJS.prototype.setTexture = function(aD, aC) {
        if (this._$mk.length < aD + 1) {
            this._$og(aD);
        }
        this._$mk[aD] = aC;
    };
    l2d_drawParamJS.prototype.setTexture = function(aC, aD) {
        if (this._$mk.length < aC + 1) {
            this._$og(aC);
        }
        this._$1j[aC] = aD;
    };
    l2d_drawParamJS.prototype._$og = function(aC) {
        var aF = Math.max(this._$mk.length * 2, aC + 1 + 10);
        var aD = new Int32Array(aF);
        l2d_UtSystem._copyArrayFromStartWithLength(this._$mk, 0, aD, 0, this._$mk.length);
        this._$mk = aD;
        var aE = new Array();
        l2d_UtSystem._copyArrayFromStartWithLength(this._$1j, 0, aE, 0, this._$1j.length);
        this._$1j = aE;
    };

    function aB() {}
    aB._$Aj = function(a6, bj, bk, aX) {
        var aW = bj._$6j(a6, bk);
        var aY = a6.getTmpPivotTableIndicesRef();
        var a5 = a6.getTmpT_ArrayRef();
        bj._$pd(aY, a5, aW);
        if (aW <= 0) {
            return aX[aY[0]];
        } else {
            if (aW == 1) {
                var be = aX[aY[0]];
                var bd = aX[aY[1]];
                var a4 = a5[0];
                return (be + (bd - be) * a4) | 0;
            } else {
                if (aW == 2) {
                    var be = aX[aY[0]];
                    var bd = aX[aY[1]];
                    var aV = aX[aY[2]];
                    var aU = aX[aY[3]];
                    var a4 = a5[0];
                    var a3 = a5[1];
                    var bm = (be + (bd - be) * a4) | 0;
                    var bl = (aV + (aU - aV) * a4) | 0;
                    return (bm + (bl - bm) * a3) | 0;
                } else {
                    if (aW == 3) {
                        var aK = aX[aY[0]];
                        var aJ = aX[aY[1]];
                        var bi = aX[aY[2]];
                        var bh = aX[aY[3]];
                        var aF = aX[aY[4]];
                        var aE = aX[aY[5]];
                        var bb = aX[aY[6]];
                        var ba = aX[aY[7]];
                        var a4 = a5[0];
                        var a3 = a5[1];
                        var a1 = a5[2];
                        var be = (aK + (aJ - aK) * a4) | 0;
                        var bd = (bi + (bh - bi) * a4) | 0;
                        var aV = (aF + (aE - aF) * a4) | 0;
                        var aU = (bb + (ba - bb) * a4) | 0;
                        var bm = (be + (bd - be) * a3) | 0;
                        var bl = (aV + (aU - aV) * a3) | 0;
                        return (bm + (bl - bm) * a1) | 0;
                    } else {
                        if (aW == 4) {
                            var aO = aX[aY[0]];
                            var aN = aX[aY[1]];
                            var bp = aX[aY[2]];
                            var bo = aX[aY[3]];
                            var aI = aX[aY[4]];
                            var aH = aX[aY[5]];
                            var bg = aX[aY[6]];
                            var bf = aX[aY[7]];
                            var a9 = aX[aY[8]];
                            var a7 = aX[aY[9]];
                            var aS = aX[aY[10]];
                            var aR = aX[aY[11]];
                            var a2 = aX[aY[12]];
                            var a0 = aX[aY[13]];
                            var aM = aX[aY[14]];
                            var aL = aX[aY[15]];
                            var a4 = a5[0];
                            var a3 = a5[1];
                            var a1 = a5[2];
                            var aZ = a5[3];
                            var aK = (aO + (aN - aO) * a4) | 0;
                            var aJ = (bp + (bo - bp) * a4) | 0;
                            var bi = (aI + (aH - aI) * a4) | 0;
                            var bh = (bg + (bf - bg) * a4) | 0;
                            var aF = (a9 + (a7 - a9) * a4) | 0;
                            var aE = (aS + (aR - aS) * a4) | 0;
                            var bb = (a2 + (a0 - a2) * a4) | 0;
                            var ba = (aM + (aL - aM) * a4) | 0;
                            var be = (aK + (aJ - aK) * a3) | 0;
                            var bd = (bi + (bh - bi) * a3) | 0;
                            var aV = (aF + (aE - aF) * a3) | 0;
                            var aU = (bb + (ba - bb) * a3) | 0;
                            var bm = (be + (bd - be) * a1) | 0;
                            var bl = (aV + (aU - aV) * a1) | 0;
                            return (bm + (bl - bm) * aZ) | 0;
                        } else {
                            var aQ = 1 << aW;
                            var aT = new Float32Array(aQ);
                            for (var bc = 0; bc < aQ; bc++) {
                                var aD = bc;
                                var aC = 1;
                                for (var aG = 0; aG < aW; aG++) {
                                    aC *= (aD % 2 == 0) ? (1 - a5[aG]) : a5[aG];
                                    aD /= 2;
                                }
                                aT[bc] = aC;
                            }
                            var bn = new Float32Array(aQ);
                            for (var aP = 0; aP < aQ; aP++) {
                                bn[aP] = aX[aY[aP]];
                            }
                            var a8 = 0;
                            for (var aP = 0; aP < aQ; aP++) {
                                a8 += aT[aP] * bn[aP];
                            }
                            return (a8 + 0.5) | 0;
                        }
                    }
                }
            }
        }
    };
    aB._$kd = function(a5, bj, bk, bb) {
        var aW = bj._$6j(a5, bk);
        var aX = a5.getTmpPivotTableIndicesRef();
        var a4 = a5.getTmpT_ArrayRef();
        bj._$pd(aX, a4, aW);
        if (aW <= 0) {
            return bb[aX[0]];
        } else {
            if (aW == 1) {
                var be = bb[aX[0]];
                var bd = bb[aX[1]];
                var a3 = a4[0];
                return be + (bd - be) * a3;
            } else {
                if (aW == 2) {
                    var be = bb[aX[0]];
                    var bd = bb[aX[1]];
                    var aV = bb[aX[2]];
                    var aU = bb[aX[3]];
                    var a3 = a4[0];
                    var a2 = a4[1];
                    return (1 - a2) * (be + (bd - be) * a3) + a2 * (aV + (aU - aV) * a3);
                } else {
                    if (aW == 3) {
                        var aK = bb[aX[0]];
                        var aJ = bb[aX[1]];
                        var bi = bb[aX[2]];
                        var bh = bb[aX[3]];
                        var aF = bb[aX[4]];
                        var aE = bb[aX[5]];
                        var ba = bb[aX[6]];
                        var a9 = bb[aX[7]];
                        var a3 = a4[0];
                        var a2 = a4[1];
                        var a0 = a4[2];
                        return (1 - a0) * ((1 - a2) * (aK + (aJ - aK) * a3) + a2 * (bi + (bh - bi) * a3)) + a0 * ((1 - a2) * (aF + (aE - aF) * a3) + a2 * (ba + (a9 - ba) * a3));
                    } else {
                        if (aW == 4) {
                            var aO = bb[aX[0]];
                            var aN = bb[aX[1]];
                            var bn = bb[aX[2]];
                            var bm = bb[aX[3]];
                            var aI = bb[aX[4]];
                            var aH = bb[aX[5]];
                            var bg = bb[aX[6]];
                            var bf = bb[aX[7]];
                            var a8 = bb[aX[8]];
                            var a6 = bb[aX[9]];
                            var aS = bb[aX[10]];
                            var aR = bb[aX[11]];
                            var a1 = bb[aX[12]];
                            var aZ = bb[aX[13]];
                            var aM = bb[aX[14]];
                            var aL = bb[aX[15]];
                            var a3 = a4[0];
                            var a2 = a4[1];
                            var a0 = a4[2];
                            var aY = a4[3];
                            return (1 - aY) * ((1 - a0) * ((1 - a2) * (aO + (aN - aO) * a3) + a2 * (bn + (bm - bn) * a3)) + a0 * ((1 - a2) * (aI + (aH - aI) * a3) + a2 * (bg + (bf - bg) * a3))) + aY * ((1 - a0) * ((1 - a2) * (a8 + (a6 - a8) * a3) + a2 * (aS + (aR - aS) * a3)) + a0 * ((1 - a2) * (a1 + (aZ - a1) * a3) + a2 * (aM + (aL - aM) * a3)));
                        } else {
                            var aQ = 1 << aW;
                            var aT = new Float32Array(aQ);
                            for (var bc = 0; bc < aQ; bc++) {
                                var aD = bc;
                                var aC = 1;
                                for (var aG = 0; aG < aW; aG++) {
                                    aC *= (aD % 2 == 0) ? (1 - a4[aG]) : a4[aG];
                                    aD /= 2;
                                }
                                aT[bc] = aC;
                            }
                            var bl = new Float32Array(aQ);
                            for (var aP = 0; aP < aQ; aP++) {
                                bl[aP] = bb[aX[aP]];
                            }
                            var a7 = 0;
                            for (var aP = 0; aP < aQ; aP++) {
                                a7 += aT[aP] * bl[aP];
                            }
                            return a7;
                        }
                    }
                }
            }
        }
    };
    aB._$Nd = function(bQ, bR, a0, aD, bx, aY, bS, bC) {
        var aI = bR._$6j(bQ, a0);
        var br = bQ.getTmpPivotTableIndicesRef();
        var aX = bQ.getTmpT_ArrayRef();
        bR._$pd(br, aX, aI);
        var aE = aD * 2;
        var aL = bS;
        if (aI <= 0) {
            var bD = br[0];
            var bl = bx[bD];
            if (bC == 2 && bS == 0) {
                l2d_UtSystem._copyArrayFromStartWithLength(bl, 0, aY, 0, aE);
            } else {
                for (var bo = 0; bo < aE;) {
                    aY[aL] = bl[bo++];
                    aY[aL + 1] = bl[bo++];
                    aL += bC;
                }
            }
        } else {
            if (aI == 1) {
                var bl = bx[br[0]];
                var bk = bx[br[1]];
                var bY = aX[0];
                var bO = 1 - bY;
                for (var bo = 0; bo < aE;) {
                    aY[aL] = bl[bo] * bO + bk[bo] * bY;
                    ++bo;
                    aY[aL + 1] = bl[bo] * bO + bk[bo] * bY;
                    ++bo;
                    aL += bC;
                }
            } else {
                if (aI == 2) {
                    var bl = bx[br[0]];
                    var bk = bx[br[1]];
                    var aU = bx[br[2]];
                    var aT = bx[br[3]];
                    var bY = aX[0];
                    var bW = aX[1];
                    var bO = 1 - bY;
                    var bK = 1 - bW;
                    var bX = bK * bO;
                    var bV = bK * bY;
                    var bH = bW * bO;
                    var bG = bW * bY;
                    for (var bo = 0; bo < aE;) {
                        aY[aL] = bX * bl[bo] + bV * bk[bo] + bH * aU[bo] + bG * aT[bo];
                        ++bo;
                        aY[aL + 1] = bX * bl[bo] + bV * bk[bo] + bH * aU[bo] + bG * aT[bo];
                        ++bo;
                        aL += bC;
                    }
                } else {
                    if (aI == 3) {
                        var a5 = bx[br[0]];
                        var a4 = bx[br[1]];
                        var aK = bx[br[2]];
                        var aJ = bx[br[3]];
                        var a1 = bx[br[4]];
                        var aZ = bx[br[5]];
                        var aG = bx[br[6]];
                        var aF = bx[br[7]];
                        var bY = aX[0];
                        var bW = aX[1];
                        var bU = aX[2];
                        var bO = 1 - bY;
                        var bK = 1 - bW;
                        var bI = 1 - bU;
                        var b3 = bI * bK * bO;
                        var b2 = bI * bK * bY;
                        var bP = bI * bW * bO;
                        var bN = bI * bW * bY;
                        var b1 = bU * bK * bO;
                        var b0 = bU * bK * bY;
                        var bL = bU * bW * bO;
                        var bJ = bU * bW * bY;
                        for (var bo = 0; bo < aE;) {
                            aY[aL] = b3 * a5[bo] + b2 * a4[bo] + bP * aK[bo] + bN * aJ[bo] + b1 * a1[bo] + b0 * aZ[bo] + bL * aG[bo] + bJ * aF[bo];
                            ++bo;
                            aY[aL + 1] = b3 * a5[bo] + b2 * a4[bo] + bP * aK[bo] + bN * aJ[bo] + b1 * a1[bo] + b0 * aZ[bo] + bL * aG[bo] + bJ * aF[bo];
                            ++bo;
                            aL += bC;
                        }
                    } else {
                        if (aI == 4) {
                            var by = bx[br[0]];
                            var bw = bx[br[1]];
                            var bj = bx[br[2]];
                            var bh = bx[br[3]];
                            var bt = bx[br[4]];
                            var bs = bx[br[5]];
                            var a9 = bx[br[6]];
                            var a8 = bx[br[7]];
                            var bB = bx[br[8]];
                            var bz = bx[br[9]];
                            var bq = bx[br[10]];
                            var bp = bx[br[11]];
                            var bv = bx[br[12]];
                            var bu = bx[br[13]];
                            var bi = bx[br[14]];
                            var bg = bx[br[15]];
                            var bY = aX[0];
                            var bW = aX[1];
                            var bU = aX[2];
                            var bT = aX[3];
                            var bO = 1 - bY;
                            var bK = 1 - bW;
                            var bI = 1 - bU;
                            var bF = 1 - bT;
                            var bf = bF * bI * bK * bO;
                            var bd = bF * bI * bK * bY;
                            var aR = bF * bI * bW * bO;
                            var aQ = bF * bI * bW * bY;
                            var a7 = bF * bU * bK * bO;
                            var a6 = bF * bU * bK * bY;
                            var aN = bF * bU * bW * bO;
                            var aM = bF * bU * bW * bY;
                            var bn = bT * bI * bK * bO;
                            var bm = bT * bI * bK * bY;
                            var aW = bT * bI * bW * bO;
                            var aV = bT * bI * bW * bY;
                            var bc = bT * bU * bK * bO;
                            var ba = bT * bU * bK * bY;
                            var aP = bT * bU * bW * bO;
                            var aO = bT * bU * bW * bY;
                            for (var bo = 0; bo < aE;) {
                                aY[aL] = bf * by[bo] + bd * bw[bo] + aR * bj[bo] + aQ * bh[bo] + a7 * bt[bo] + a6 * bs[bo] + aN * a9[bo] + aM * a8[bo] + bn * bB[bo] + bm * bz[bo] + aW * bq[bo] + aV * bp[bo] + bc * bv[bo] + ba * bu[bo] + aP * bi[bo] + aO * bg[bo];
                                ++bo;
                                aY[aL + 1] = bf * by[bo] + bd * bw[bo] + aR * bj[bo] + aQ * bh[bo] + a7 * bt[bo] + a6 * bs[bo] + aN * a9[bo] + aM * a8[bo] + bn * bB[bo] + bm * bz[bo] + aW * bq[bo] + aV * bp[bo] + bc * bv[bo] + ba * bu[bo] + aP * bi[bo] + aO * bg[bo];
                                ++bo;
                                aL += bC;
                            }
                        } else {
                            var bZ = 1 << aI;
                            var bE = new Float32Array(bZ);
                            for (var be = 0; be < bZ; be++) {
                                var aC = be;
                                var aH = 1;
                                for (var bA = 0; bA < aI; bA++) {
                                    aH *= (aC % 2 == 0) ? (1 - aX[bA]) : aX[bA];
                                    aC /= 2;
                                }
                                bE[be] = aH;
                            }
                            var bb = new Float32Array(bZ);
                            for (var aS = 0; aS < bZ; aS++) {
                                bb[aS] = bx[br[aS]];
                            }
                            for (var bo = 0; bo < aE;) {
                                var a3 = 0,
                                    a2 = 0;
                                var bM = bo + 1;
                                for (var aS = 0; aS < bZ; aS++) {
                                    a3 += bE[aS] * bb[aS][bo];
                                    a2 += bE[aS] * bb[aS][bM];
                                }
                                bo += 2;
                                aY[aL] = a3;
                                aY[aL + 1] = a2;
                                aL += bC;
                            }
                        }
                    }
                }
            }
        }
    };

    function A(aC) {
        if (live2d_initializing) {
            return;
        }
        this._$u2 = null;
        this._partsIndex = null;
        this._$Gg = false;
        this._$Vf = true;
        this._$u2 = aC;
        this.totalScale = 1;
        this.opacity = 1;
        this.totalOpacity = 1;
    }
    A.prototype._$7R = function() {
        return this._$Vf && !this._$Gg;
    };
    A.prototype._$vg = function(aC) {
        this._$Vf = aC;
    };
    A.prototype._$Xf = function() {
        return this._$u2;
    };
    A.prototype._setPartsIndex = function(aC) {
        this._partsIndex = aC;
    };
    A.prototype.getPartsIndex = function() {
        return this._partsIndex;
    };
    A.prototype._$3j = function() {
        return this._$Gg;
    };
    A.prototype._$4k = function(aC) {
        this._$Gg = aC;
    };
    A.prototype.getTotalScale = function() {
        return this.totalScale;
    };
    A.prototype.setTotalScale_notForClient = function(aC) {
        this.totalScale = aC;
    };
    A.prototype.getInterpolatedOpacity = function() {
        return this.opacity;
    };
    A.prototype.setInterpolatedOpacity = function(aC) {
        this.opacity = aC;
    };
    A.prototype.getTotalOpacity = function(aC) {
        return this.totalOpacity;
    };
    A.prototype.setTotalOpacity = function(aC) {
        this.totalOpacity = aC;
    };

    function am() {
        if (live2d_initializing) {
            return;
        }
        this._$Zj = null;
        this._$kk = null;
        this._state = null;
        this._$JR = null;
        this._$PT = null;
        this._$2T = null;
        this._$cd = null;
        this._$wd = null;
        this._$xk = null;
        this._$Kd = null;
        this._state = l2d_state_const.STATE_FIRST;
        this._$cd = 4000;
        this._$wd = 100;
        this._$xk = 50;
        this._$Kd = 150;
        this._$JR = true;
        this._$PT = "PARAM_EYE_L_OPEN";
        this._$2T = "PARAM_EYE_R_OPEN";
    }
    am.prototype._$fj = function() {
        var aD = l2d_UtSystem.getUserTimeMSec();
        var aC = Math._$Z2();
        return (aD + aC * (2 * this._$cd - 1));
    };
    am.prototype._$5R = function(aC) {
        this._$cd = aC;
    };
    am.prototype._$6g = function(aD, aC, aE) {
        this._$wd = aD;
        this._$xk = aC;
        this._$Kd = aE;
    };
    am.prototype._$af = function(aD) {
        var aF = l2d_UtSystem.getUserTimeMSec();
        var aC;
        var aE = 0;
        switch (this._state) {
        case STATE_CLOSING:
            aE = (aF - this._$kk) / this._$wd;
            if (aE >= 1) {
                aE = 1;
                this._state = l2d_state_const.STATE_CLOSED;
                this._$kk = aF;
            }
            aC = 1 - aE;
            break;
        case STATE_CLOSED:
            aE = (aF - this._$kk) / this._$xk;
            if (aE >= 1) {
                this._state = l2d_state_const.STATE_OPENING;
                this._$kk = aF;
            }
            aC = 0;
            break;
        case STATE_OPENING:
            aE = (aF - this._$kk) / this._$Kd;
            if (aE >= 1) {
                aE = 1;
                this._state = l2d_state_const.STATE_INTERVAL;
                this._$Zj = this._$fj();
            }
            aC = aE;
            break;
        case STATE_INTERVAL:
            if (this._$Zj < aF) {
                this._state = l2d_state_const.STATE_CLOSING;
                this._$kk = aF;
            }
            aC = 1;
            break;
        case STATE_FIRST:
        default:
            this._state = l2d_state_const.STATE_INTERVAL;
            this._$Zj = this._$fj();
            aC = 1;
            break;
        }
        if (!this._$JR) {
            aC = -aC;
        }
        aD.setParamFloat(this._$PT, aC);
        aD.setParamFloat(this._$2T, aC);
    };
    var l2d_state_const = function() {};
    l2d_state_const.STATE_FIRST = "STATE_FIRST";
    l2d_state_const.STATE_INTERVAL = "STATE_INTERVAL";
    l2d_state_const.STATE_CLOSING = "STATE_CLOSING";
    l2d_state_const.STATE_CLOSED = "STATE_CLOSED";
    l2d_state_const.STATE_OPENING = "STATE_OPENING";

    function l2d_PartsData() {
        if (live2d_initializing) {
            return;
        }
        this.visible = true;
        this._islocked = false;
        this._partsDataID = null;
        this._baseDataList = null;
        this._drawDataList = null;
        l2d_PartsData._instance_count++;
    }
    l2d_PartsData._instance_count = 0;
    l2d_PartsData.prototype._initialize = function() {
        this._baseDataList = new Array();
        this._drawDataList = new Array();
    };
    l2d_PartsData.prototype._initWithBufferReader = function(buffReader) {
        this._islocked = buffReader._getNextBitFlag();
        this.visible = buffReader._getNextBitFlag();
        this._partsDataID = buffReader._getNextValue();
        this._baseDataList = buffReader._getNextValue();
        this._drawDataList = buffReader._getNextValue();
    };
    l2d_PartsData.prototype.init = function(aD) {
        var aC = new l2d_PartsDataContext(this);
        aC.setPartsOpacity(this.isVisible() ? 1 : 0);
        return aC;
    };
    l2d_PartsData.prototype.addBaseData = function(aC) {
        if (this._baseDataList == null) {
            throw new Error("baseDataList not initialized@addBaseData");
        }
        this._baseDataList.push(aC);
    };
    l2d_PartsData.prototype.addDrawData = function(aC) {
        if (this._drawDataList == null) {
            throw new Error("_drawDataList not initialized@addDrawData");
        }
        this._drawDataList.push(aC);
    };
    l2d_PartsData.prototype.setBaseData = function(aC) {
        this._baseDataList = aC;
    };
    l2d_PartsData.prototype.setDrawData = function(aC) {
        this._drawDataList = aC;
    };
    l2d_PartsData.prototype.isVisible = function() {
        return this.visible;
    };
    l2d_PartsData.prototype.isLocked = function() {
        return this._islocked;
    };
    l2d_PartsData.prototype.setVisible = function(aC) {
        this.visible = aC;
    };
    l2d_PartsData.prototype.setLocked = function(aC) {
        this._islocked = aC;
    };
    l2d_PartsData.prototype.getBaseData = function() {
        return this._baseDataList;
    };
    l2d_PartsData.prototype.getDrawData = function() {
        return this._drawDataList;
    };
    l2d_PartsData.prototype.getPartsDataID = function() {
        return this._partsDataID;
    };
    l2d_PartsData.prototype.setPartsDataID = function(aC) {
        this._partsDataID = aC;
    };
    l2d_PartsData.prototype.getPartsID = function() {
        return this._partsDataID;
    };
    l2d_PartsData.prototype.setPartsID = function(aC) {
        this._partsDataID = aC;
    };

    function l2d_PartsDataContext(partsData) {
        this._partsOpacity = null;
        this._partsData = null;
        this._partsData = partsData;
    }
    l2d_PartsDataContext.prototype = new Q();
    l2d_PartsDataContext.prototype.getPartsOpacity = function() {
        return this._partsOpacity;
    };
    l2d_PartsDataContext.prototype.setPartsOpacity = function(aC) {
        this._partsOpacity = aC;
    };

    function l2d_global_format() {}
    // l2d_global_format._$Ra = 6;
    // l2d_global_format._$ga = 7;
    l2d_global_format._some_old_format_version_8 = 8;
    // l2d_global_format._$aa = 9;
    l2d_global_format.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10;
    l2d_global_format._latest_format_version = l2d_global_format.LIVE2D_FORMAT_VERSION_V2_10_SDK2;
    // l2d_global_format._$4m = -2004318072;
    // l2d_global_format._$v2 = 0;
    // l2d_global_format._$iT = 23;
    l2d_global_format._some_cached_value_type_33 = 33;
    l2d_global_format._printLog_at = function(aC) {
        console.log("_$kR :: _$B _$KR _$h2 : %d\n", aC);
    };
    l2d_global_format._new_obj_with_type = function(aC) {
        if (aC < 40) {
            l2d_global_format._printLog_at(aC);
            return null;
        } else {
            if (aC < 50) {
                l2d_global_format._printLog_at(aC);
                return null;
            } else {
                if (aC < 60) {
                    l2d_global_format._printLog_at(aC);
                    return null;
                } else {
                    if (aC < 100) {
                        switch (aC) {
                        case 65:
                            return new D();
                        case 66:
                            return new g();
                        case 67:
                            return new l2d_param();
                        case 68:
                            return new X();
                        case 69:
                            return new T();
                        case 70:
                            return new b();
                        default:
                            l2d_global_format._printLog_at(aC);
                            return null;
                        }
                    } else {
                        if (aC < 150) {
                            switch (aC) {
                            case 131:
                                return new l2d_value();
                            case 133:
                                return new l2d_PartsData();
                            case 136:
                                return new l2d_model();
                            case 137:
                                return new l2d_ParamDefSet();
                            case 142:
                                return new al();
                            }
                        }
                    }
                }
            }
        }
        l2d_global_format._printLog_at(aC);
        return null;
    };

    function Q() {}
    // function U() {
    //     if (live2d_initializing) {
    //         return;
    //     }
    //     l2d_AMotion.prototype.constructor.call(this);
    //     this.motions = new Array();
    //     this._$ad = null;
    //     this._$ad = U._$xR++;
    //     this._$w2 = 30;
    //     this._$7f = 0;
    //     this._loop = true;
    //     this.loopFadeIn = true;
    //     this._$Vg = -1;
    //     _$Q2();
    // }
    // U.prototype = new l2d_AMotion();
    // U._PREFIX_VISIBLE = "VISIBLE:";
    // U._PREFIX_LAYOUT = "LAYOUT:";
    // U._$xR = 0;
    // U._$wj = [];
    // U._$Zf = 1;
    // U.loadMotion = function(aM) {
    //     var aH = new U();
    //     var aD = [0];
    //     var aK = aM.length;
    //     aH._$7f = 0;
    //     for (var aE = 0; aE < aK; ++aE) {
    //         var aL = (aM[aE] & 255);
    //         if (aL == "\n" || aL == "\r") {
    //             continue;
    //         }
    //         if (aL == "#") {
    //             for (; aE < aK; ++aE) {
    //                 if (aM[aE] == "\n" || aM[aE] == "\r") {
    //                     break;
    //                 }
    //             }
    //             continue;
    //         }
    //         if (aL == "$") {
    //             var aO = aE;
    //             var aF = -1;
    //             for (; aE < aK; ++aE) {
    //                 aL = (aM[aE] & 255);
    //                 if (aL == "\r" || aL == "\n") {
    //                     break;
    //                 }
    //                 if (aL == "=") {
    //                     aF = aE;
    //                     break;
    //                 }
    //             }
    //             var aJ = false;
    //             if (aF >= 0) {
    //                 if (aF == aO + 4 && aM[aO + 1] == "f" && aM[aO + 2] == "p" && aM[aO + 3] == "s") {
    //                     aJ = true;
    //                 }
    //                 for (aE = aF + 1; aE < aK; ++aE) {
    //                     aL = (aM[aE] & 255);
    //                     if (aL == "\r" || aL == "\n") {
    //                         break;
    //                     }
    //                     if (aL == "," || aL == " " || aL == "\t") {
    //                         continue;
    //                     }
    //                     var aG = l2d_string._string2number(aM, aK, aE, aD);
    //                     if (aD[0] > 0) {
    //                         if (aJ && 5 < aG && aG < 121) {
    //                             aH._$w2 = aG;
    //                         }
    //                     }
    //                     aE = aD[0];
    //                 }
    //             }
    //             for (; aE < aK; ++aE) {
    //                 if (aM[aE] == "\n" || aM[aE] == "\r") {
    //                     break;
    //                 }
    //             }
    //             continue;
    //         }
    //         if (("a" <= aL && aL <= "z") || ("A" <= aL && aL <= "Z") || aL == "_") {
    //             var aO = aE;
    //             var aF = -1;
    //             for (; aE < aK; ++aE) {
    //                 aL = (aM[aE] & 255);
    //                 if (aL == "\r" || aL == "\n") {
    //                     break;
    //                 }
    //                 if (aL == "=") {
    //                     aF = aE;
    //                     break;
    //                 }
    //             }
    //             if (aF >= 0) {
    //                 var aI = new s();
    //                 if (l2d_string.startsWith(aM, aO, U._PREFIX_VISIBLE)) {
    //                     aI._$CH = s._$vm;
    //                     aI._$iH = new String(aM, aO, aF - aO);
    //                 } else {
    //                     if (l2d_string.startsWith(aM, aO, U._PREFIX_LAYOUT)) {
    //                         aI._$iH = new String(aM, aO + 7, aF - aO - 7);
    //                         if (l2d_string.startsWith(aM, aO + 7, "ANCHOR_X")) {
    //                             aI._$CH = s._$3m;
    //                         } else {
    //                             if (l2d_string.startsWith(aM, aO + 7, "ANCHOR_Y")) {
    //                                 aI._$CH = s._$5m;
    //                             } else {
    //                                 if (l2d_string.startsWith(aM, aO + 7, "SCALE_X")) {
    //                                     aI._$CH = s._$Mm;
    //                                 } else {
    //                                     if (l2d_string.startsWith(aM, aO + 7, "SCALE_Y")) {
    //                                         aI._$CH = s._$9m;
    //                                     } else {
    //                                         if (l2d_string.startsWith(aM, aO + 7, "X")) {
    //                                             aI._$CH = s._$Lm;
    //                                         } else {
    //                                             if (l2d_string.startsWith(aM, aO + 7, "Y")) {
    //                                                 aI._$CH = s._$tm;
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     } else {
    //                         aI._$CH = s._$Od;
    //                         aI._$iH = new String(aM, aO, aF - aO);
    //                     }
    //                 }
    //                 aH.motions.push(aI);
    //                 var aN = 0;
    //                 U._$wj.clear();
    //                 for (aE = aF + 1; aE < aK; ++aE) {
    //                     aL = (aM[aE] & 255);
    //                     if (aL == "\r" || aL == "\n") {
    //                         break;
    //                     }
    //                     if (aL == "," || aL == " " || aL == "\t") {
    //                         continue;
    //                     }
    //                     var aG = l2d_string._string2number(aM, aK, aE, aD);
    //                     if (aD[0] > 0) {
    //                         U._$wj.push(aG);
    //                         aN++;
    //                         var aC = aD[0];
    //                         if (aC < aE) {
    //                             console.log("_$o2 _$vP . @Live2DMotion loadMotion()\n");
    //                             break;
    //                         }
    //                         aE = aC;
    //                     }
    //                 }
    //                 aI._$42 = U._$wj._$cT();
    //                 if (aN > aH._$7f) {
    //                     aH._$7f = aN;
    //                 }
    //             }
    //         }
    //     }
    //     aH._$Vg = ((1000 * aH._$7f) / aH._$w2) | 0;
    //     return aH;
    // };
    // U.prototype.getDurationMSec = function() {
    //     return this._$Vg;
    // };
    // U.prototype.dump = function() {
    //     for (var aE = 0; aE < this.motions.length; aE++) {
    //         var aC = this.motions[aE];
    //         console.log("_paramID[%s] [%d]. ", aC._$iH, aC._$42.length);
    //         for (var aD = 0; aD < aC._$42.length && aD < 10; aD++) {
    //             console.log("%5.2f ,", aC._$42[aD]);
    //         }
    //         console.log("\n");
    //     }
    // };
    // U.prototype.updateParamExe = function(aC, aG, aJ, aS) {
    //     var aH = aG - aS._$pj;
    //     var aQ = aH * this._$w2 / 1000;
    //     var aE = aQ | 0;
    //     var aK = aQ - aE;
    //     for (var aP = 0; aP < this.motions.length; aP++) {
    //         var aN = this.motions[aP];
    //         var aF = aN._$42.length;
    //         var aL = aN._$iH;
    //         if (aN._$CH == s._$vm) {
    //             var aO = aN._$42[(aE >= aF ? aF - 1 : aE)];
    //             aC.setParamFloat(aL, aO);
    //         } else {
    //             if (s._$Lm <= aN._$CH && aN._$CH <= s._$9m) {} else {
    //                 var aM = aC.getParamFloat(aL);
    //                 var aT = aN._$42[(aE >= aF ? aF - 1 : aE)];
    //                 var aR = aN._$42[(aE + 1 >= aF ? aF - 1 : aE + 1)];
    //                 var aD = aT + (aR - aT) * aK;
    //                 var aI = aM + (aD - aM) * aJ;
    //                 aC.setParamFloat(aL, aI);
    //             }
    //         }
    //     }
    //     if (aE >= this._$7f) {
    //         if (this._loop) {
    //             aS._$pj = aG;
    //             if (this.loopFadeIn) {
    //                 aS._$km = aG;
    //             }
    //         } else {
    //             aS._finished = true;
    //         }
    //     }
    // };
    // U.prototype.isLoop = function() {
    //     return this._loop;
    // };
    // U.prototype.setLoop = function(aC) {
    //     this._loop = aC;
    // };
    // U.prototype.isLoopFadeIn = function() {
    //     return this.loopFadeIn;
    // };
    // U.prototype.setLoopFadeIn = function(aC) {
    //     this.loopFadeIn = aC;
    // };

    // function aA() {
    //     this._$H = new Float32Array(100);
    //     this.size = 0;
    // }
    // aA.prototype.clear = function() {
    //     this.size = 0;
    // };
    // aA.prototype.add = function(aD) {
    //     if (this._$H.length <= this.size) {
    //         var aC = new Float32Array(this.size * 2);
    //         l2d_UtSystem._copyArrayFromStartWithLength(this._$H, 0, aC, 0, this.size);
    //         this._$H = aC;
    //     }
    //     this._$H[this.size++] = aD;
    // };
    // aA.prototype._$cT = function() {
    //     var aC = new Float32Array(this.size);
    //     l2d_UtSystem._copyArrayFromStartWithLength(this._$H, 0, aC, 0, this.size);
    //     return aC;
    // };

    function s() {
        this._$iH = null;
        this._$42 = null;
        this._$CH = null;
    }
    s._$Od = 0;
    s._$vm = 1;
    s._$Lm = 100;
    s._$tm = 101;
    s._$3m = 102;
    s._$5m = 103;
    s._$Mm = 104;
    s._$9m = 105;

    function l2d_Live2DMotion() {
        if (live2d_initializing) {
            return;
        }
        l2d_AMotion.prototype.constructor.call(this);
        this.motions = new Array();
        this._$Rj = null;
        this._$ad = l2d_Live2DMotion._$xR++;
        this._$w2 = 30;
        this._$7f = 0;
        this._loop = false;
        this.loopFadeIn = true;
        this._loopDurationMSec = -1;
        this._$uH = 0;
    }
    l2d_Live2DMotion.prototype = new l2d_AMotion();
    l2d_Live2DMotion._PREFIX_VISIBLE = "VISIBLE:";
    l2d_Live2DMotion._PREFIX_LAYOUT = "LAYOUT:";
    l2d_Live2DMotion.MTN_PREFIX_FADEIN = "FADEIN:";
    l2d_Live2DMotion.MTN_PREFIX_FADEOUT = "FADEOUT:";
    l2d_Live2DMotion._$xR = 0;
    l2d_Live2DMotion._$Zf = 1;
    // l2d_Live2DMotion.loadMotion = function(aE) {
    //     var aD = ak._$x(aE);
    //     var aC = l2d_Live2DMotion.loadMotion(aD);
    //     return aC;
    // };

    function l2d_stringFromCharCode(aD, aC) {
        return String.fromCharCode(aD.getUint8(aC));
    }
    l2d_Live2DMotion.loadMotion = function(buffer_data) {
        if (buffer_data instanceof ArrayBuffer) {
            buffer_data = new DataView(buffer_data);
        }
        var aI = new l2d_Live2DMotion();
        var aD = [0];
        var buffer_len = buffer_data.byteLength;
        aI._$7f = 0;
        for (var aE = 0; aE < buffer_len; ++aE) {
            var buffer_str = l2d_stringFromCharCode(buffer_data, aE);
            var buffer_code = buffer_str.charCodeAt(0);
            if (buffer_str == "\n" || buffer_str == "\r") {
                continue;
            }
            if (buffer_str == "#") {
                for (; aE < buffer_len; ++aE) {
                    if (l2d_stringFromCharCode(buffer_data, aE) == "\n" || l2d_stringFromCharCode(buffer_data, aE) == "\r") {
                        break;
                    }
                }
                continue;
            }
            if (buffer_str == "$") {
                var aQ = aE;
                var aF = -1;
                for (; aE < buffer_len; ++aE) {
                    buffer_str = l2d_stringFromCharCode(buffer_data, aE);
                    if (buffer_str == "\r" || buffer_str == "\n") {
                        break;
                    }
                    if (buffer_str == "=") {
                        aF = aE;
                        break;
                    }
                }
                var aK = false;
                if (aF >= 0) {
                    if (aF == aQ + 4 && l2d_stringFromCharCode(buffer_data, aQ + 1) == "f" && l2d_stringFromCharCode(buffer_data, aQ + 2) == "p" && l2d_stringFromCharCode(buffer_data, aQ + 3) == "s") {
                        aK = true;
                    }
                    for (aE = aF + 1; aE < buffer_len; ++aE) {
                        buffer_str = l2d_stringFromCharCode(buffer_data, aE);
                        if (buffer_str == "\r" || buffer_str == "\n") {
                            break;
                        }
                        if (buffer_str == "," || buffer_str == " " || buffer_str == "\t") {
                            continue;
                        }
                        var aH = l2d_string._string2number(buffer_data, buffer_len, aE, aD);
                        if (aD[0] > 0) {
                            if (aK && 5 < aH && aH < 121) {
                                aI._$w2 = aH;
                            }
                        }
                        aE = aD[0];
                    }
                }
                for (; aE < buffer_len; ++aE) {
                    if (l2d_stringFromCharCode(buffer_data, aE) == "\n" || l2d_stringFromCharCode(buffer_data, aE) == "\r") {
                        break;
                    }
                }
                continue;
            }
            if ((97 <= buffer_code && buffer_code <= 122) || (65 <= buffer_code && buffer_code <= 90) || buffer_str == "_") {
                var aQ = aE;
                var aF = -1;
                for (; aE < buffer_len; ++aE) {
                    buffer_str = l2d_stringFromCharCode(buffer_data, aE);
                    if (buffer_str == "\r" || buffer_str == "\n") {
                        break;
                    }
                    if (buffer_str == "=") {
                        aF = aE;
                        break;
                    }
                }
                if (aF >= 0) {
                    var aJ = new s();
                    if (l2d_string.startsWith(buffer_data, aQ, l2d_Live2DMotion._PREFIX_VISIBLE)) {
                        aJ._$CH = s._$vm;
                        aJ._$iH = l2d_string.createString(buffer_data, aQ, aF - aQ);
                    } else {
                        if (l2d_string.startsWith(buffer_data, aQ, l2d_Live2DMotion._PREFIX_LAYOUT)) {
                            aJ._$iH = l2d_string.createString(buffer_data, aQ + 7, aF - aQ - 7);
                            if (l2d_string.startsWith(buffer_data, aQ + 7, "ANCHOR_X")) {
                                aJ._$CH = s._$3m;
                            } else {
                                if (l2d_string.startsWith(buffer_data, aQ + 7, "ANCHOR_Y")) {
                                    aJ._$CH = s._$5m;
                                } else {
                                    if (l2d_string.startsWith(buffer_data, aQ + 7, "SCALE_X")) {
                                        aJ._$CH = s._$Mm;
                                    } else {
                                        if (l2d_string.startsWith(buffer_data, aQ + 7, "SCALE_Y")) {
                                            aJ._$CH = s._$9m;
                                        } else {
                                            if (l2d_string.startsWith(buffer_data, aQ + 7, "X")) {
                                                aJ._$CH = s._$Lm;
                                            } else {
                                                if (l2d_string.startsWith(buffer_data, aQ + 7, "Y")) {
                                                    aJ._$CH = s._$tm;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            aJ._$CH = s._$Od;
                            aJ._$iH = l2d_string.createString(buffer_data, aQ, aF - aQ);
                        }
                    }
                    aI.motions.push(aJ);
                    var aP = 0;
                    var aM = [];
                    for (aE = aF + 1; aE < buffer_len; ++aE) {
                        buffer_str = l2d_stringFromCharCode(buffer_data, aE);
                        if (buffer_str == "\r" || buffer_str == "\n") {
                            break;
                        }
                        if (buffer_str == "," || buffer_str == " " || buffer_str == "\t") {
                            continue;
                        }
                        var aH = l2d_string._string2number(buffer_data, buffer_len, aE, aD);
                        if (aD[0] > 0) {
                            aM.push(aH);
                            aP++;
                            var aC = aD[0];
                            if (aC < aE) {
                                console.log("_$o2 _$vP . @Live2DMotion loadMotion()\n");
                                break;
                            }
                            aE = aC - 1;
                        }
                    }
                    aJ._$42 = new Float32Array(aM);
                    if (aP > aI._$7f) {
                        aI._$7f = aP;
                    }
                }
            }
        }
        aI._loopDurationMSec = ((1000 * aI._$7f) / aI._$w2) | 0;
        return aI;
    };
    l2d_Live2DMotion.prototype.getDurationMSec = function() {
        return this._loop ? -1 : this._loopDurationMSec;
    };
    l2d_Live2DMotion.prototype.getLoopDurationMSec = function() {
        return this._loopDurationMSec;
    };
    l2d_Live2DMotion.prototype.dump = function() {
        for (var aE = 0; aE < this.motions.length; aE++) {
            var aC = this.motions[aE];
            console.log("_paramID[%s] [%d]. ", aC._$iH, aC._$42.length);
            for (var aD = 0; aD < aC._$42.length && aD < 10; aD++) {
                console.log("%5.2f ,", aC._$42[aD]);
            }
            console.log("\n");
        }
    };
    l2d_Live2DMotion.prototype.updateParamExe = function(aE, aI, aL, aY) {
        var aJ = aI - aY._$pj;
        var aV = aJ * this._$w2 / 1000;
        var aF = aV | 0;
        var aM = aV - aF;
        for (var aU = 0; aU < this.motions.length; aU++) {
            var aQ = this.motions[aU];
            var aG = aQ._$42.length;
            var aO = aQ._$iH;
            if (aQ._$CH == s._$vm) {
                var aS = aQ._$42[(aF >= aG ? aG - 1 : aF)];
                aE.setParamFloat(aO, aS);
            } else {
                if (s._$Lm <= aQ._$CH && aQ._$CH <= s._$9m) {} else {
                    var aC = aE.getParamIndex(aO);
                    var aZ = aE.getModelContext();
                    var aT = aZ.getParamMax(aC);
                    var aR = aZ.getParamMin(aC);
                    var aH = 0.4;
                    var aN = aH * (aT - aR);
                    var aP = aZ.getParamFloat(aC);
                    var aX = aQ._$42[(aF >= aG ? aG - 1 : aF)];
                    var aW = aQ._$42[(aF + 1 >= aG ? aG - 1 : aF + 1)];
                    var aD;
                    if ((aX < aW && aW - aX > aN) || (aX > aW && aX - aW > aN)) {
                        aD = aX;
                    } else {
                        aD = aX + (aW - aX) * aM;
                    }
                    var aK = aP + (aD - aP) * aL;
                    aE.setParamFloat(aO, aK);
                }
            }
        }
        if (aF >= this._$7f) {
            if (this._loop) {
                aY._$pj = aI;
                if (this.loopFadeIn) {
                    aY._$km = aI;
                }
            } else {
                aY._finished = true;
            }
        }
        this._$uH = aL;
    };
    l2d_Live2DMotion.prototype.isLoop = function() {
        return this._loop;
    };
    l2d_Live2DMotion.prototype.setLoop = function(aC) {
        this._loop = aC;
    };
    l2d_Live2DMotion.prototype._$g2 = function() {
        return this._$w2;
    };
    l2d_Live2DMotion.prototype._$12 = function(aC) {
        this._$w2 = aC;
    };
    l2d_Live2DMotion.prototype.isLoopFadeIn = function() {
        return this.loopFadeIn;
    };
    l2d_Live2DMotion.prototype.setLoopFadeIn = function(aC) {
        this.loopFadeIn = aC;
    };

    // function aA() {
    //     this._$H = new Float32Array(100);
    //     this.size = 0;
    // }
    // aA.prototype.clear = function() {
    //     this.size = 0;
    // };
    // aA.prototype.add = function(aD) {
    //     if (this._$H.length <= this.size) {
    //         var aC = new Float32Array(this.size * 2);
    //         l2d_UtSystem._copyArrayFromStartWithLength(this._$H, 0, aC, 0, this.size);
    //         this._$H = aC;
    //     }
    //     this._$H[this.size++] = aD;
    // };
    // aA.prototype._$cT = function() {
    //     var aC = new Float32Array(this.size);
    //     l2d_UtSystem._copyArrayFromStartWithLength(this._$H, 0, aC, 0, this.size);
    //     return aC;
    // };

    // function s() {
    //     this._$iH = null;
    //     this._$42 = null;
    //     this._$CH = null;
    // }
    // s._$Od = 0;
    // s._$vm = 1;
    // s._$Lm = 100;
    // s._$tm = 101;
    // s._$3m = 102;
    // s._$5m = 103;
    // s._$Mm = 104;
    // s._$9m = 105;

    // function ad() {}
    // ad.prototype._$LH = function(aH, aD, aF) {
    //     for (var aG = 0; aG < aF; aG++) {
    //         for (var aC = 0; aC < aD; aC++) {
    //             var aE = 2 * (aC + aG * aD);
    //             console.log("(% 7.3f , % 7.3f) , ", aH[aE], aH[aE + 1]);
    //         }
    //         console.log("\n");
    //     }
    //     console.log("\n");
    // };

    function l2d_LDGL(aC, aD) {
        this.canvas = aC;
        this.context = aD;
        this._$yf = new Array(0, 0, aC.width, aC.height);
        this._$Bd = 1;
        this._$3H = 0;
        this._$Sd = 1;
        this._$5H = 0;
        this._$6R = -1;
        this.cacheImages = {};
    }
    l2d_LDGL.tr = new l2d_LDTransform();
    l2d_LDGL._$Y2 = new l2d_LDTransform();
    l2d_LDGL._$fP = new Array(0, 0);
    l2d_LDGL._$HP = new Array(0, 0);
    l2d_LDGL._$c = new Array(0, 0);
    l2d_LDGL.prototype._$bH = function(aD, aF, aE, aC) {
        this._$yf = new Array(aD, aF, aE, aC);
    };
    l2d_LDGL.prototype._$kT = function() {
        this.context.save();
        var aC = this._$yf;
        if (aC != null) {
            this.context.beginPath();
            this.context._$TP(aC[0], aC[1], aC[2], aC[3]);
            this.context.clip();
        }
    };
    l2d_LDGL.prototype._$uP = function() {
        this.context.restore();
    };
    l2d_LDGL.prototype.drawElements = function(a7, bh, aS, aE, bv, aH, bg, bu) {
        try {
            if (bv != this._$6R) {
                this._$6R = bv;
                this.context.globalAlpha = bv;
            }
            var aX = bh.length;
            var aK = a7.width;
            var a0 = a7.height;
            var bz = this.context;
            var a2 = this._$3H;
            var a1 = this._$5H;
            var aW = this._$Bd;
            var aU = this._$Sd;
            var by = l2d_LDGL.tr;
            var aD = l2d_LDGL._$fP;
            var aC = l2d_LDGL._$HP;
            var bp = l2d_LDGL._$c;
            for (var bt = 0; bt < aX; bt += 3) {
                bz.save();
                var aR = bh[bt];
                var aQ = bh[bt + 1];
                var aO = bh[bt + 2];
                var aG = a2 + aW * aS[aR * 2];
                var aF = a1 + aU * aS[aR * 2 + 1];
                var bm = a2 + aW * aS[aQ * 2];
                var bk = a1 + aU * aS[aQ * 2 + 1];
                var bc = a2 + aW * aS[aO * 2];
                var ba = a1 + aU * aS[aO * 2 + 1];
                if (bg) {
                    bg._$Hg(aG, aF, bp);
                    aG = bp[0];
                    aF = bp[1];
                    bg._$Hg(bm, bk, bp);
                    bm = bp[0];
                    bk = bp[1];
                    bg._$Hg(bc, ba, bp);
                    bc = bp[0];
                    ba = bp[1];
                }
                var aN = aK * aE[aR * 2];
                var aL = a0 - a0 * aE[aR * 2 + 1];
                var bs = aK * aE[aQ * 2];
                var br = a0 - a0 * aE[aQ * 2 + 1];
                var bf = aK * aE[aO * 2];
                var be = a0 - a0 * aE[aO * 2 + 1];
                var aY = Math.atan2(br - aL, bs - aN);
                var aV = Math.atan2(bk - aF, bm - aG);
                var aJ = bm - aG;
                var aI = bk - aF;
                var bd = Math.sqrt(aJ * aJ + aI * aI);
                var aP = bs - aN;
                var aM = br - aL;
                var bo = Math.sqrt(aP * aP + aM * aM);
                var bq = bd / bo;
                Y._$oP(bf, be, aN, aL, (bs - aN), (br - aL), -(br - aL), (bs - aN), aD);
                Y._$oP(bc, ba, aG, aF, (bm - aG), (bk - aF), -(bk - aF), (bm - aG), aC);
                var aT = (aC[0] - aD[0]) / aD[1];
                var bn = Math.min(aN, bs, bf);
                var bb = Math.max(aN, bs, bf);
                var bl = Math.min(aL, br, be);
                var a9 = Math.max(aL, br, be);
                var bj = Math.floor(bn);
                var a6 = Math.floor(bl);
                var aZ = Math.ceil(bb);
                var bx = Math.ceil(a9);
                by.identity();
                by.translate(aG, aF);
                by.rotate(aV);
                by.scale(1, aC[1] / aD[1]);
                by.shear(aT, 0);
                by.scale(bq, bq);
                by.rotate(-aY);
                by.translate(-aN, -aL);
                by.setContext(bz);
                var a3 = true;
                var a4 = 1.2;
                if (!aH) {
                    aH = a3 ? a4 : 0;
                }
                if (l2d_Live2D.IGNORE_EXPAND) {
                    aH = 0;
                }
                if (l2d_Live2D.USE_CACHED_POLYGON_IMAGE) {
                    var a8 = bu._$u2;
                    a8.gl_cacheImage = a8.gl_cacheImage || {};
                    if (!a8.gl_cacheImage[bt]) {
                        var bi = l2d_LDGL.createCanvas(aZ - bj, bx - a6);
                        l2d_Live2D.DEBUG_DATA.LDGL_CANVAS_MB = l2d_Live2D.DEBUG_DATA.LDGL_CANVAS_MB || 0;
                        l2d_Live2D.DEBUG_DATA.LDGL_CANVAS_MB += (aZ - bj) * (bx - a6) * 4;
                        var a5 = bi.getContext("2d");
                        a5.translate(-bj, -a6);
                        l2d_LDGL.clip(a5, by, aH, bd, aN, aL, bs, br, bf, be, aG, aF, bm, bk, bc, ba);
                        a5.drawImage(a7, 0, 0);
                        a8.gl_cacheImage[bt] = {
                            cacheCanvas: bi,
                            cacheContext: a5
                        };
                    }
                    bz.drawImage(a8.gl_cacheImage[bt]["cacheCanvas"], bj, a6);
                } else {
                    if (!l2d_Live2D.IGNORE_CLIP) {
                        l2d_LDGL.clip(bz, by, aH, bd, aN, aL, bs, br, bf, be, aG, aF, bm, bk, bc, ba);
                    }
                    if (l2d_Live2D.USE_ADJUST_TRANSLATION) {
                        bn = 0;
                        bb = aK;
                        bl = 0;
                        a9 = a0;
                    }
                    bz.drawImage(a7, bn, bl, bb - bn, a9 - bl, bn, bl, bb - bn, a9 - bl);
                }
                bz.restore();
            }
        } catch (bw) {
            l2d_UtDebug.dumpException(bw);
        }
    };
    l2d_LDGL.clip = function(aF, aE, aQ, aD, aH, aG, aP, aO, aL, aK, aJ, aI, aC, aR, aN, aM) {
        if (aQ > 0.02) {
            l2d_LDGL.expandClip(aF, aE, aQ, aD, aJ, aI, aC, aR, aN, aM);
        } else {
            l2d_LDGL.clipWithTransform(aF, null, aH, aG, aP, aO, aL, aK);
        }
    };
    l2d_LDGL.expandClip = function(aQ, bb, aF, aY, aE, aD, a9, a5, aU, aS) {
        var aK = a9 - aE;
        var aJ = a5 - aD;
        var bd = aU - aE;
        var bc = aS - aD;
        var be = aK * bc - aJ * bd > 0 ? aF : -aF;
        var aG = -aJ;
        var aC = aK;
        var a7 = aU - a9;
        var a3 = aS - a5;
        var a2 = -a3;
        var a1 = a7;
        var aL = Math.sqrt(a7 * a7 + a3 * a3);
        var ba = -bc;
        var a6 = bd;
        var aX = Math.sqrt(bd * bd + bc * bc);
        var a8 = aE - be * aG / aY;
        var a4 = aD - be * aC / aY;
        var aT = a9 - be * aG / aY;
        var aR = a5 - be * aC / aY;
        var a0 = a9 - be * a2 / aL;
        var aZ = a5 - be * a1 / aL;
        var aN = aU - be * a2 / aL;
        var aM = aS - be * a1 / aL;
        var aI = aE + be * ba / aX;
        var aH = aD + be * a6 / aX;
        var aW = aU + be * ba / aX;
        var aV = aS + be * a6 / aX;
        var aP = l2d_LDGL._$Y2;
        var aO = bb._$Hj(aP);
        if (aO == null) {
            return false;
        }
        l2d_LDGL.clipWithTransform(aQ, aP, a8, a4, aT, aR, a0, aZ, aN, aM, aW, aV, aI, aH);
        return true;
    };
    l2d_LDGL.clipWithTransform = function(aC, aD, aN, aI, aL, aF, aK, aE) {
        if (arguments.length < (1 + 3 * 2)) {
            l2d_UtDebug.error("err : @LDGL.clip()");
            return;
        }
        if (!(arguments[1] instanceof ah)) {
            l2d_UtDebug.error("err : a[0] is _$B LDTransform @LDGL.clip()");
            return;
        }
        var aH = l2d_LDGL._$c;
        var aJ = aD;
        var aM = arguments;
        aC.beginPath();
        if (aJ) {
            aJ._$Hg(aM[2], aM[3], aH);
            aC.moveTo(aH[0], aH[1]);
            for (var aG = 4; aG < aM.length; aG += 2) {
                aJ._$Hg(aM[aG], aM[aG + 1], aH);
                aC.lineTo(aH[0], aH[1]);
            }
        } else {
            aC.moveTo(aM[2], aM[3]);
            for (var aG = 4; aG < aM.length; aG += 2) {
                aC.lineTo(aM[aG], aM[aG + 1]);
            }
        }
        aC.clip();
    };
    l2d_LDGL.createCanvas = function(aC, aE) {
        var aD = document.createElement("canvas");
        aD.setAttribute("width", aC);
        aD.setAttribute("height", aE);
        if (!aD) {
            l2d_UtDebug.error("err : " + aD);
        }
        return aD;
    };
    l2d_LDGL.dumpValues = function() {
        var aD = "";
        for (var aC = 0; aC < arguments.length; aC++) {
            aD += "[" + aC + "]= " + arguments[aC].toFixed(3) + " , ";
        }
        console.log(aD);
    };

    function ax(aC) {
        if (live2d_initializing) {
            return;
        }
        this._$u2 = null;
        this._partsIndex = null;
        this._$1m = null;
        this.opacity = null;
        this._$4g = [false];
        this._$Ng = null;
        this._$Vf = true;
        this.baseOpacity = 1;
        this._$u2 = aC;
    }
    ax.prototype._$5j = function() {
        return this._$4g[0];
    };
    ax.prototype._$7R = function() {
        return this._$Vf && !this._$4g[0];
    };
    ax.prototype._$Xf = function() {
        return this._$u2;
    };

    function ay() {
        if (live2d_initializing) {
            return;
        }
        this._$a = 1;
        this._$q = 0;
        this._$0 = 0;
        this._$s = 1;
        this._$I = 0;
        this._$L = 0;
        this._$vP = STATE_IDENTITY;
        this._$A = _$Wg;
    }
    ay._$Ig = -1;
    ay._$Wg = 0;
    ay._$vk = 1;
    ay.STATE_IDENTITY = 0;
    ay._$sk = 1;
    ay._$qR = 2;
    ay._$sR = 4;
    ay.prototype.transform = function(aF, aD, aC) {
        var aO, aN, aM, aH, aG, aE;
        var aL = 0;
        var aI = 0;
        switch (this._$vP) {
        default:
            return;
        case (ay._$sR | ay._$qR | ay._$sk):
            aO = this._$a;
            aN = this._$0;
            aM = this._$I;
            aH = this._$q;
            aG = this._$s;
            aE = this._$L;
            while (--aC >= 0) {
                var aK = aF[aL++];
                var aJ = aF[aL++];
                aD[aI++] = (aO * aK + aN * aJ + aM);
                aD[aI++] = (aH * aK + aG * aJ + aE);
            }
            return;
        case (ay._$sR | ay._$qR):
            aO = this._$a;
            aN = this._$0;
            aH = this._$q;
            aG = this._$s;
            while (--aC >= 0) {
                var aK = aF[aL++];
                var aJ = aF[aL++];
                aD[aI++] = (aO * aK + aN * aJ);
                aD[aI++] = (aH * aK + aG * aJ);
            }
            return;
        case (ay._$sR | ay._$sk):
            aN = this._$0;
            aM = this._$I;
            aH = this._$q;
            aE = this._$L;
            while (--aC >= 0) {
                var aK = aF[aL++];
                aD[aI++] = (aN * aF[aL++] + aM);
                aD[aI++] = (aH * aK + aE);
            }
            return;
        case (ay._$sR):
            aN = this._$0;
            aH = this._$q;
            while (--aC >= 0) {
                var aK = aF[aL++];
                aD[aI++] = (aN * aF[aL++]);
                aD[aI++] = (aH * aK);
            }
            return;
        case (ay._$qR | ay._$sk):
            aO = this._$a;
            aM = this._$I;
            aG = this._$s;
            aE = this._$L;
            while (--aC >= 0) {
                aD[aI++] = (aO * aF[aL++] + aM);
                aD[aI++] = (aG * aF[aL++] + aE);
            }
            return;
        case (ay._$qR):
            aO = this._$a;
            aG = this._$s;
            while (--aC >= 0) {
                aD[aI++] = (aO * aF[aL++]);
                aD[aI++] = (aG * aF[aL++]);
            }
            return;
        case (ay._$sk):
            aM = this._$I;
            aE = this._$L;
            while (--aC >= 0) {
                aD[aI++] = (aF[aL++] + aM);
                aD[aI++] = (aF[aL++] + aE);
            }
            return;
        case (ay.STATE_IDENTITY):
            if (aF != aD || aL != aI) {
                l2d_UtSystem._copyArrayFromStartWithLength(aF, aL, aD, aI, aC * 2);
            }
            return;
        }
    };
    ay.prototype.update = function() {
        if (this._$0 == 0 && this._$q == 0) {
            if (this._$a == 1 && this._$s == 1) {
                if (this._$I == 0 && this._$L == 0) {
                    this._$vP = ay.STATE_IDENTITY;
                    this._$A = ay._$Wg;
                } else {
                    this._$vP = ay._$sk;
                    this._$A = ay._$vk;
                }
            } else {
                if (this._$I == 0 && this._$L == 0) {
                    this._$vP = ay._$qR;
                    this._$A = ay._$Ig;
                } else {
                    this._$vP = (ay._$qR | ay._$sk);
                    this._$A = ay._$Ig;
                }
            }
        } else {
            if (this._$a == 0 && this._$s == 0) {
                if (this._$I == 0 && this._$L == 0) {
                    this._$vP = ay._$sR;
                    this._$A = ay._$Ig;
                } else {
                    this._$vP = (ay._$sR | ay._$sk);
                    this._$A = ay._$Ig;
                }
            } else {
                if (this._$I == 0 && this._$L == 0) {
                    this._$vP = (ay._$sR | ay._$qR);
                    this._$A = ay._$Ig;
                } else {
                    this._$vP = (ay._$sR | ay._$qR | ay._$sk);
                    this._$A = ay._$Ig;
                }
            }
        }
    };
    ay.prototype._$Cf = function(aF) {
        this._$4f(aF);
        var aE = aF[0];
        var aC = aF[2];
        var aI = aF[1];
        var aH = aF[3];
        var aD = Math.sqrt(aE * aE + aI * aI);
        var aG = aE * aH - aC * aI;
        if (aD == 0) {
            if (l2d_Live2D.L2D_VERBOSE) {
                console.log("affine._$Cf() / rt==0");
            }
        } else {
            aF[0] = aD;
            aF[1] = aG / aD;
            aF[2] = (aI * aH + aE * aC) / aG;
            aF[3] = Math.atan2(aI, aE);
        }
    };
    ay.prototype._$vR = function(aI, aH, aD, aC) {
        var aG = new Float32Array(6);
        var aF = new Float32Array(6);
        aI._$Cf(aG);
        aH._$Cf(aF);
        var aE = new Float32Array(6);
        aE[0] = aG[0] + (aF[0] - aG[0]) * aD;
        aE[1] = aG[1] + (aF[1] - aG[1]) * aD;
        aE[2] = aG[2] + (aF[2] - aG[2]) * aD;
        aE[3] = aG[3] + (aF[3] - aG[3]) * aD;
        aE[4] = aG[4] + (aF[4] - aG[4]) * aD;
        aE[5] = aG[5] + (aF[5] - aG[5]) * aD;
        aC._$xf(aE);
    };
    ay.prototype._$xf = function(aE) {
        var aD = Math.cos(aE[3]);
        var aC = Math.sin(aE[3]);
        this._$a = aE[0] * aD;
        this._$q = aE[0] * aC;
        this._$0 = aE[1] * (aE[2] * aD - aC);
        this._$s = aE[1] * (aE[2] * aC + aD);
        this._$I = aE[4];
        this._$L = aE[5];
        this.update();
    };
    ay.prototype._$4f = function(aC) {
        aC[0] = this._$a;
        aC[1] = this._$q;
        aC[2] = this._$0;
        aC[3] = this._$s;
        aC[4] = this._$I;
        aC[5] = this._$L;
    };

    function b() {
        if (live2d_initializing) {
            return;
        }
        a.prototype.constructor.call(this);
        this._textureNo = -1;
        this._numPoints = 0;
        this._$9R = 0;
        this._$GH = null;
        this._$YH = null;
        this._$cH = null;
        this._$hR = null;
        this._$6P = null;
        this._$Bm = null;
        this.culling = true;
        this.gl_cacheImage = null;
        this.instanceNo = b._instance_count++;
    }
    b.prototype = new a();
    b._instance_count = 0;
    b._$nm = 30;
    b._$Km = 0;
    b._$om = 1;
    b._$_m = 2;
    b._$sf = new Array();
    b.prototype._setTextureNo = function(aC) {
        this._textureNo = aC;
    };
    b.prototype.getTextureNo = function() {
        return this._textureNo;
    };
    b.prototype._$AT = function() {
        return this._$6P;
    };
    b.prototype._$0j = function() {
        return this._$GH;
    };
    b.prototype.getNumPoints = function() {
        return this._numPoints;
    };
    b.prototype.getType = function() {
        return a._$Lk;
    };
    b.prototype._$cj = function(aG, aC, aJ) {
        var aH = aC;
        var aI = (aH._$vd != null) ? aH._$vd : aH._$xd;
        var aF = aq._$yR;
        switch (aF) {
        default:
        case aq._$8m:
            throw new Error("_$T _$dR ");
        case aq._$6m:
            for (var aE = this._numPoints - 1; aE >= 0; --aE) {
                var aD = aE * aq._$tR;
                aI[aD + 4] = aJ;
            }
            break;
        }
    };
    b.prototype._initialize = function() {
        this._$Xg = new g();
        this._$Xg._initialize();
    };
    b.prototype._initWithBufferReader = function(aF) {
        a.prototype._initWithBufferReader.call(this, aF);
        this._textureNo = aF._getNextInt32();
        this._numPoints = aF._getNextInt32();
        this._$9R = aF._getNextInt32();
        var aC = aF._getNextValue();
        this._$cH = new Int16Array(this._$9R * 3);
        for (var aE = this._$9R * 3 - 1; aE >= 0; --aE) {
            this._$cH[aE] = aC[aE];
        }
        this._$hR = aF._getNextValue();
        this._$6P = aF._getNextValue();
        if (aF.getFormatVersion() >= l2d_global_format._some_old_format_version_8) {
            this._$GH = aF._getNextInt32();
            if (this._$GH != 0) {
                if ((this._$GH & 1) != 0) {
                    var aD = aF._getNextInt32();
                    if (this._$YH == null) {
                        this._$YH = new Object();
                    }
                    this._$YH._$0k = parseInt(aD);
                }
                if ((this._$GH & b._$nm) != 0) {
                    this._$Bm = (this._$GH & b._$nm) >> 1;
                } else {
                    this._$Bm = b._$Km;
                }
                if ((this._$GH & 32) != 0) {
                    this.culling = false;
                }
            }
        } else {
            this._$GH = 0;
        }
    };
    b.prototype.init = function(aG) {
        var aI = new ab(this);
        var aD = this._numPoints * aq._$tR;
        var aC = this._$Sj();
        if (aI._$xd != null) {
            aI._$xd = null;
        }
        aI._$xd = new Float32Array(aD);
        if (aI._$vd != null) {
            aI._$vd = null;
        }
        aI._$vd = aC ? new Float32Array(aD) : null;
        var aH = aq._$yR;
        switch (aH) {
        default:
        case aq._$8m:
            if (aq._$Tm) {
                for (var aE = this._numPoints - 1; aE >= 0; --aE) {
                    var aJ = aE << 1;
                    this._$6P[aJ + 1] = 1 - this._$6P[aJ + 1];
                }
            }
            break;
        case aq._$6m:
            for (var aE = this._numPoints - 1; aE >= 0; --aE) {
                var aJ = aE << 1;
                var aF = aE * aq._$tR;
                var aL = this._$6P[aJ];
                var aK = this._$6P[aJ + 1];
                aI._$xd[aF] = aL;
                aI._$xd[aF + 1] = aK;
                aI._$xd[aF + 4] = 0;
                if (aC) {
                    aI._$vd[aF] = aL;
                    aI._$vd[aF + 1] = aK;
                    aI._$vd[aF + 4] = 0;
                }
            }
            break;
        }
        return aI;
    };
    b.prototype._$td = function(aE, aC) {
        var aF = aC;
        if (!((this == aF._$Xf()))) {
            console.log("### assert!! ### ");
        }
        if (!this._$Xg._$1d(aE)) {
            return;
        }
        a.prototype._$td.call(this, aE, aF);
        if (aF._$4g[0]) {
            return;
        }
        var aD = b._$sf;
        aD[0] = false;
        aB._$Nd(aE, this._$Xg, aD, this._numPoints, this._$hR, aF._$xd, aq._$Pj, aq._$tR);
    };
    b.prototype._$jk = function(aF, aD) {
        try {
            if (!((this == aD._$Xf()))) {
                console.log("### assert!! ### ");
            }
            var aG = false;
            if (aD._$4g[0]) {
                aG = true;
            }
            var aH = aD;
            if (!aG) {
                a.prototype._$jk.call(this, aF);
                if (this._$Sj()) {
                    var aC = this.getTargetBaseDataID();
                    if (aH._$Fd == a._$5d) {
                        aH._$Fd = aF.getBaseDataIndex(aC);
                    }
                    if (aH._$Fd < 0) {
                        if (l2d_Live2D.L2D_VERBOSE) {
                            l2d_UtDebug.error("_$T _$2H _$X :: %s", aC);
                        }
                    } else {
                        var aJ = aF.getBaseData(aH._$Fd);
                        var aE = aF.getBaseContext(aH._$Fd);
                        if (aJ != null && !aE._$3j()) {
                            aJ._$ok(aF, aE, aH._$xd, aH._$vd, this._numPoints, aq._$Pj, aq._$tR);
                            aH._$Vf = true;
                        } else {
                            aH._$Vf = false;
                        }
                        aH.baseOpacity = aE.getTotalOpacity();
                    }
                }
            }
        } catch (aI) {
            throw aI;
        }
    };
    b.prototype.draw = function(aI, aF, aD) {
        if (!((this == aD._$Xf()))) {
            console.log("### assert!! ### ");
        }
        if (aD._$4g[0]) {
            return;
        }
        var aG = aD;
        var aE = this._textureNo;
        if (aE < 0) {
            aE = 1;
        }
        var aC = this.getOpacity(aF, aG) * aD._$Ng * aD.baseOpacity;
        var aH = (aG._$vd != null) ? aG._$vd : aG._$xd;
        aI._setCulling(this.culling);
        aI._drawTexture(aE, 3 * this._$9R, this._$cH, aH, this._$6P, aC, this._$Bm, aG);
    };
    b.prototype.dump = function() {
        console.log("  _$7P( %d ) , _numPoints( %d ) , _$9R( %d ) \n", this._textureNo, this._numPoints, this._$9R);
        console.log("  _$nP _$yP = { ");
        for (var aE = 0; aE < this._$cH.length; aE++) {
            console.log("%5d ,", this._$cH[aE]);
        }
        console.log("\n  _$YP _$S2");
        for (var aE = 0; aE < this._$hR.length; aE++) {
            console.log("\n    _$S2[%d] = ", aE);
            var aC = this._$hR[aE];
            for (var aD = 0; aD < aC.length; aD++) {
                console.log("%6.2f, ", aC[aD]);
            }
        }
        console.log("\n");
    };
    b.prototype._$aj = function(aC) {
        if (this._$YH == null) {
            return null;
        }
        return this._$YH[aC];
    };
    b.prototype.getIndexArray = function() {
        return this._$cH;
    };

    function ab(aC) {
        ax.prototype.constructor.call(this, aC);
        this._$Fd = a._$5d;
        this._$xd = null;
        this._$vd = null;
    }
    ab.prototype = new ax();
    ab.prototype.getTransformedPoints = function() {
        return (this._$vd != null) ? this._$vd : this._$xd;
    };

    function g() {
        if (live2d_initializing) {
            return;
        }
        this._paramList = null;
    }
    g.prototype._initialize = function() {
        this._paramList = new Array();
    };
    g.prototype._initWithBufferReader = function(aC) {
        this._paramList = aC._getNextValue();
    };
    g.prototype._$1d = function(aF) {
        if (aF.requireSetup()) {
            return true;
        }
        var aC = aF.getInitVersion();
        for (var aE = this._paramList.length - 1; aE >= 0; --aE) {
            var aD = this._paramList[aE].getParamIndex(aC);
            if (aD == l2d_param._defaultParamIndex) {
                aD = aF.getParamIndex(this._paramList[aE].getParamID());
            }
            if (aF.isParamUpdated(aD)) {
                return true;
            }
        }
        return false;
    };
    g.prototype._$6j = function(aG, aQ) {
        var aS = this._paramList.length;
        var aE = aG.getInitVersion();
        var aI = 0;
        var aD;
        var aL;
        for (var aF = 0; aF < aS; aF++) {
            var aC = this._paramList[aF];
            aD = aC.getParamIndex(aE);
            if (aD == l2d_param._defaultParamIndex) {
                aD = aG.getParamIndex(aC.getParamID());
                aC._$Hk(aD, aE);
            }
            if (aD < 0) {
                throw new Exception("err 23242 : " + aC.getParamID());
            }
            var aP = aD < 0 ? 0 : aG.getParamFloat(aD);
            aL = aC._getParamValueCount();
            var aH = aC._getParamValueList();
            var aK = -1;
            var aO = 0;
            var aN;
            var aM;
            if (aL < 1) {} else {
                if (aL == 1) {
                    aN = aH[0];
                    if (aN - aq._$G < aP && aP < aN + aq._$G) {
                        aK = 0;
                        aO = 0;
                    } else {
                        aK = 0;
                        aQ[0] = true;
                    }
                } else {
                    aN = aH[0];
                    if (aP < aN - aq._$G) {
                        aK = 0;
                        aQ[0] = true;
                    } else {
                        if (aP < aN + aq._$G) {
                            aK = 0;
                        } else {
                            var aR = false;
                            for (var aJ = 1; aJ < aL; ++aJ) {
                                aM = aH[aJ];
                                if (aP < aM + aq._$G) {
                                    if (aM - aq._$G < aP) {
                                        aK = aJ;
                                    } else {
                                        aK = aJ - 1;
                                        aO = (aP - aN) / (aM - aN);
                                        aI++;
                                    }
                                    aR = true;
                                    break;
                                }
                                aN = aM;
                            }
                            if (!aR) {
                                aK = aL - 1;
                                aO = 0;
                                aQ[0] = true;
                            }
                        }
                    }
                }
            }
            aC._$Ld(aK);
            aC._$VT(aO);
        }
        return aI;
    };
    g.prototype._$pd = function(aI, aO, aK) {
        var aM = 1 << aK;
        if (aM + 1 > aq._$6k) {
            console.log("err 23245\n");
        }
        var aN = this._paramList.length;
        var aF = 1;
        var aC = 1;
        var aE = 0;
        for (var aL = 0; aL < aM; ++aL) {
            aI[aL] = 0;
        }
        for (var aG = 0; aG < aN; ++aG) {
            var aD = this._paramList[aG];
            if (aD._$gT() == 0) {
                var aJ = aD._$Td() * aF;
                if (aJ < 0 && l2d_Live2D.L2D_DEBUG) {
                    throw new Exception("err 23246");
                }
                for (var aL = 0; aL < aM; ++aL) {
                    aI[aL] += aJ;
                }
            } else {
                var aJ = aF * aD._$Td();
                var aH = aF * (aD._$Td() + 1);
                for (var aL = 0; aL < aM; ++aL) {
                    aI[aL] += ((aL / aC | 0) % 2 == 0) ? aJ : aH;
                }
                aO[aE++] = aD._$gT();
                aC *= 2;
            }
            aF *= aD._getParamValueCount();
        }
        aI[aM] = 65535;
        aO[aE] = -1;
    };
    g.prototype._$vj = function(aE, aC, aF) {
        var aH = new Float32Array(aC);
        for (var aG = 0; aG < aC; ++aG) {
            aH[aG] = aF[aG];
        }
        var aD = new l2d_param();
        aD._setParamID(aE);
        aD._setParamValue(aC, aH);
        this._paramList.push(aD);
    };
    // g.prototype._$Gj = function(aJ) {
    //     var aI = aJ;
    //     var aH = this._paramList.length;
    //     for (var aF = 0; aF < aH; ++aF) {
    //         var aD = this._paramList[aF];
    //         var aC = aD._getParamValueCount();
    //         var aE = aI % aD._getParamValueCount();
    //         var aG = aD._getParamValueList()[aE];
    //         console.log("%s[%d]=%7.2f / ", aD.getParamID(), aE, aG);
    //         aI /= aC;
    //     }
    //     console.log("\n");
    // };
    g.prototype.getParamCount = function() {
        return this._paramList.length;
    };
    g.prototype._getParamList = function() {
        return this._paramList;
    };

    function T() {
        if (live2d_initializing) {
            return;
        }
        this._$qT = 0;
        this._$sT = 0;
        this._$c2 = 1;
        this._$p2 = 1;
        this._$Mf = 0;
        this.reflectX = false;
        this.reflectY = false;
    }
    T.prototype.init = function(aC) {
        this._$qT = aC._$qT;
        this._$sT = aC._$sT;
        this._$c2 = aC._$c2;
        this._$p2 = aC._$p2;
        this._$Mf = aC._$Mf;
        this.reflectX = aC.reflectX;
        this.reflectY = aC.reflectY;
    };
    T.prototype._initWithBufferReader = function(aC) {
        this._$qT = aC._getNextFloat32();
        this._$sT = aC._getNextFloat32();
        this._$c2 = aC._getNextFloat32();
        this._$p2 = aC._getNextFloat32();
        this._$Mf = aC._getNextFloat32();
        if (aC.getFormatVersion() >= l2d_global_format.LIVE2D_FORMAT_VERSION_V2_10_SDK2) {
            this.reflectX = aC._getNextBool8();
            this.reflectY = aC._getNextBool8();
        }
    };
    T.prototype._$u = function() {};

    function l2d_context_params(model) {
        if (live2d_initializing) {
            return;
        }
        this._$6f = true;
        this._$UR = -1;
        this._$MR = 0;
        this._paramKeys = new Array(l2d_context_params._param_count);
        this._$_j = new Float32Array(l2d_context_params._param_count);
        this._$zd = new Float32Array(l2d_context_params._param_count);
        this._paramMinMap = new Float32Array(l2d_context_params._param_count);
        this._paramMaxMap = new Float32Array(l2d_context_params._param_count);
        this._$qm = new Float32Array(l2d_context_params._param_count);
        this._$Gm = new Array(l2d_context_params._param_count);
        this._baseDataList = new Array();
        this._drawDataList = new Array();
        this._drawDataMap = null;
        this._partsDataList = new Array();
        this._$yk = new Array();
        this._$Fk = new Array();
        this._parts = new Array();
        this._$lm = null;
        this._$Nm = null;
        this._$hd = null;
        this._$hm = new Int16Array(aq._$6k);
        this._$AH = new Float32Array(aq._$Zd * 2);
        this._l2dmodelBase = model;
        this._$k2 = l2d_context_params._instance_count++;
    }
    l2d_context_params._instance_count = 0;
    l2d_context_params._$_2 = true;
    l2d_context_params._$Nj = -1;
    l2d_context_params._$l2 = -1;
    l2d_context_params._$Jd = false;
    l2d_context_params._$Ag = true;
    l2d_context_params._$ed = (-1000000);
    l2d_context_params._$bd = (1000000);
    l2d_context_params._param_count = 32;
    l2d_context_params._$u = false;
    l2d_context_params.prototype.getDrawDataIndex = function(id) {
        for (var i = this._drawDataList.length - 1; i >= 0; --i) {
            if (this._drawDataList[i] != null && this._drawDataList[i].getDrawDataID() == id) {
                return i;
            }
        }
        return -1;
    };
    l2d_context_params.prototype.getDrawData = function(aC) {
        if (aC instanceof l2d_DrawDataID) {
            if (this._drawDataMap == null) {
                this._drawDataMap = new Object();
                var aE = this._drawDataList.length;
                for (var aD = 0; aD < aE; aD++) {
                    var aG = this._drawDataList[aD];
                    var aF = aG.getDrawDataID();
                    if (aF == null) {
                        continue;
                    }
                    this._drawDataMap[aF] = aG;
                }
            }
            return this._drawDataMap[id];
        } else {
            if (aC < this._drawDataList.length) {
                return this._drawDataList[aC];
            } else {
                return null;
            }
        }
    };
    l2d_context_params.prototype.release = function() {
        this._baseDataList.clear();
        this._drawDataList.clear();
        this._partsDataList.clear();
        if (this._drawDataMap != null) {
            this._drawDataMap.clear();
        }
        this._$yk.clear();
        this._$Fk.clear();
        this._parts.clear();
    };
    l2d_context_params.prototype.init = function() {
        this._$UR++;
        if (this._partsDataList.length > 0) {
            this.release();
        }
        var l2dmodel = this._l2dmodelBase.getModelImpl();
        var partsDataList = l2dmodel._getPartsDataList();
        var aN = partsDataList.length;
        var aC = new Array();
        var aY = new Array();
        for (var aQ = 0; aQ < aN; ++aQ) {
            var partsData = partsDataList[aQ];
            this._partsDataList.push(partsData);
            this._parts.push(partsData.init(this));
            var aF = partsData.getBaseData();
            var aM = aF.length;
            for (var aP = 0; aP < aM; ++aP) {
                aC.push(aF[aP]);
            }
            for (var aP = 0; aP < aM; ++aP) {
                var aH = aF[aP].init(this);
                aH._setPartsIndex(aQ);
                aY.push(aH);
            }
            var aW = partsData.getDrawData();
            var aK = aW.length;
            for (var aP = 0; aP < aK; ++aP) {
                var aU = aW[aP];
                var aV = aU.init(this);
                aV._partsIndex = aQ;
                this._drawDataList.push(aU);
                this._$Fk.push(aV);
            }
        }
        var aT = aC.length;
        var aI = l2d_BaseDataID.DST_BASE_ID();
        while (true) {
            var aS = false;
            for (var aQ = 0; aQ < aT; ++aQ) {
                var aG = aC[aQ];
                if (aG == null) {
                    continue;
                }
                var aX = aG.getTargetBaseDataID();
                if (aX == null || aX == aI || this.getBaseDataIndex(aX) >= 0) {
                    this._baseDataList.push(aG);
                    this._$yk.push(aY[aQ]);
                    aC[aQ] = null;
                    aS = true;
                }
            }
            if (!aS) {
                break;
            }
        }
        var aD = l2dmodel._getParamDefSet();
        if (aD != null) {
            var aE = aD._getParamDefFloatList();
            if (aE != null) {
                var aR = aE.length;
                for (var aQ = 0; aQ < aR; ++aQ) {
                    var paramDefFloat = aE[aQ];
                    if (paramDefFloat == null) {
                        continue;
                    }
                    this.addFloatParam(paramDefFloat.getParamID(), paramDefFloat.getDefaultValue(), paramDefFloat.getMinValue(), paramDefFloat.getMaxValue());
                }
            }
        }
        this._$6f = true;
    };
    l2d_context_params.prototype.update = function() {
        if (l2d_context_params._$u) {
            l2d_UtDebug.start("_$pT");
        }
        var aF = this._$_j.length;
        for (var aR = 0; aR < aF; aR++) {
            if (this._$_j[aR] != this._$zd[aR]) {
                this._$Gm[aR] = l2d_context_params._$Ag;
                this._$zd[aR] = this._$_j[aR];
            }
        }
        var aS = false;
        var aL = this._baseDataList.length;
        var aI = this._drawDataList.length;
        var aN = a.getMinInterval_$Rd();
        var aU = a.getMaxInterval_$Hd();
        var aP = aU - aN + 1;
        if (this._$lm == null || this._$lm.length < aP) {
            this._$lm = new Int16Array(aP);
            this._$Nm = new Int16Array(aP);
        }
        for (var aR = 0; aR < aP; aR++) {
            this._$lm[aR] = l2d_context_params._$Nj;
            this._$Nm[aR] = l2d_context_params._$Nj;
        }
        if (this._$hd == null || this._$hd.length < aI) {
            this._$hd = new Int16Array(aI);
        }
        for (var aR = 0; aR < aI; aR++) {
            this._$hd[aR] = l2d_context_params._$l2;
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.dump("_$pT");
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.start("_$1T");
        }
        var aG = null;
        for (var aQ = 0; aQ < aL; ++aQ) {
            var aE = this._baseDataList[aQ];
            var aC = this._$yk[aQ];
            try {
                aE._$td(this, aC);
                aE._$jk(this, aC);
            } catch (aT) {
                if (aG == null) {
                    aG = aT;
                }
            }
        }
        if (aG != null) {
            if (l2d_context_params._$_2) {
                l2d_UtDebug.dumpException(aG);
            }
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.dump("_$1T");
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.start("_$wT");
        }
        var aM = null;
        for (var aJ = 0; aJ < aI; ++aJ) {
            var aH = this._drawDataList[aJ];
            var aD = this._$Fk[aJ];
            try {
                aH._$td(this, aD);
                if (aD._$5j()) {
                    continue;
                }
                aH._$jk(this, aD);
                var aO = Math.floor(aH._$pg(this, aD) - aN);
                var aK;
                try {
                    aK = this._$Nm[aO];
                } catch (aT) {
                    console.log("error :: %s / %s                @@l2d_context_params\n", aT.toString(), aH.getDrawDataID().toString());
                    aO = Math.floor(aH._$pg(this, aD) - aN);
                    continue;
                }
                if (aK == l2d_context_params._$Nj) {
                    this._$lm[aO] = aJ;
                } else {
                    this._$hd[aK] = aJ;
                }
                this._$Nm[aO] = aJ;
            } catch (aT) {
                if (aM == null) {
                    aM = aT;
                    l2d_Live2D.setError(l2d_Live2D.L2D_ERROR_DDTEXTURE_SETUP_TRANSFORM_FAILED);
                }
            }
        }
        if (aM != null) {
            if (l2d_context_params._$_2) {
                l2d_UtDebug.dumpException(aM);
            }
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.dump("_$wT");
        }
        if (l2d_context_params._$u) {
            l2d_UtDebug.start("_$uT");
        }
        for (var aR = this._$Gm.length - 1; aR >= 0; aR--) {
            this._$Gm[aR] = l2d_context_params._$Jd;
        }
        this._$6f = false;
        if (l2d_context_params._$u) {
            l2d_UtDebug.dump("_$uT");
        }
        return aS;
    };
    l2d_context_params.prototype.draw = function(drawParam) {
        if (this._$lm == null) {
            l2d_UtDebug.error("call _l2dmodelBase.update() before _l2dmodelBase.draw() ");
            return;
        }
        var aK = this._$lm.length;
        drawParam._setupDraw();
        for (var aF = 0; aF < aK; ++aF) {
            var aI = this._$lm[aF];
            if (aI == l2d_context_params._$Nj) {
                continue;
            }
            do {
                var aC = this._drawDataList[aI];
                var aD = this._$Fk[aI];
                if (aD._$7R()) {
                    var aE = aD._partsIndex;
                    var aG = this._parts[aE];
                    aD._$Ng = aG.getPartsOpacity();
                    aC.draw(drawParam, this, aD);
                }
                var aJ = this._$hd[aI];
                if (aJ <= aI || aJ == l2d_context_params._$l2) {
                    break;
                }
                aI = aJ;
            } while (true);
        }
    };
    l2d_context_params.prototype.getParamIndex = function(aC) {
        for (var aD = this._paramKeys.length - 1; aD >= 0; --aD) {
            if (this._paramKeys[aD] == aC) {
                return aD;
            }
        }
        return this.addFloatParam(aC, 0, l2d_context_params._$ed, l2d_context_params._$bd);
    };
    // l2d_context_params.prototype._$cg = function(aC) {
    //     return this.getBaseDataIndex(aC);
    // };
    l2d_context_params.prototype.getBaseDataIndex = function(aC) {
        for (var aD = this._baseDataList.length - 1; aD >= 0; --aD) {
            if (this._baseDataList[aD] != null && this._baseDataList[aD].getBaseDataID() == aC) {
                return aD;
            }
        }
        return -1;
    };
    l2d_context_params.prototype._$1f = function(aE, aC) {
        var aD = new Float32Array(aC);
        l2d_UtSystem._copyArrayFromStartWithLength(aE, 0, aD, 0, aE.length);
        return aD;
    };
    l2d_context_params.prototype.addFloatParam = function(aI, aH, aG, aC) {
        if (this._$MR >= this._paramKeys.length) {
            var aF = this._paramKeys.length;
            var aE = new Array(aF * 2);
            l2d_UtSystem._copyArrayFromStartWithLength(this._paramKeys, 0, aE, 0, aF);
            this._paramKeys = aE;
            this._$_j = this._$1f(this._$_j, aF * 2);
            this._$zd = this._$1f(this._$zd, aF * 2);
            this._paramMinMap = this._$1f(this._paramMinMap, aF * 2);
            this._paramMaxMap = this._$1f(this._paramMaxMap, aF * 2);
            var aD = new Array();
            l2d_UtSystem._copyArrayFromStartWithLength(this._$Gm, 0, aD, 0, aF);
            this._$Gm = aD;
        }
        this._paramKeys[this._$MR] = aI;
        this._$_j[this._$MR] = aH;
        this._$zd[this._$MR] = aH;
        this._paramMinMap[this._$MR] = aG;
        this._paramMaxMap[this._$MR] = aC;
        this._$Gm[this._$MR] = l2d_context_params._$Ag;
        return this._$MR++;
    };
    l2d_context_params.prototype.setBaseData = function(baseDataIndex, baseData) {
        this._baseDataList[baseDataIndex] = baseData;
    };
    l2d_context_params.prototype.setParamFloat = function(aC, aD) {
        if (aD < this._paramMinMap[aC]) {
            aD = this._paramMinMap[aC];
        }
        if (aD > this._paramMaxMap[aC]) {
            aD = this._paramMaxMap[aC];
        }
        this._$_j[aC] = aD;
    };
    l2d_context_params.prototype.loadParam = function() {
        var aC = this._$_j.length;
        if (aC > this._$qm.length) {
            aC = this._$qm.length;
        }
        l2d_UtSystem._copyArrayFromStartWithLength(this._$qm, 0, this._$_j, 0, aC);
    };
    l2d_context_params.prototype.saveParam = function() {
        var aC = this._$_j.length;
        if (aC > this._$qm.length) {
            this._$qm = new Float32Array(aC);
        }
        l2d_UtSystem._copyArrayFromStartWithLength(this._$_j, 0, this._$qm, 0, aC);
    };
    l2d_context_params.prototype.getInitVersion = function() {
        return this._$UR;
    };
    l2d_context_params.prototype.requireSetup = function() {
        return this._$6f;
    };
    l2d_context_params.prototype.isParamUpdated = function(aC) {
        return this._$Gm[aC] == l2d_context_params._$Ag;
    };
    l2d_context_params.prototype.getTmpPivotTableIndicesRef = function() {
        return this._$hm;
    };
    l2d_context_params.prototype.getTmpT_ArrayRef = function() {
        return this._$AH;
    };
    l2d_context_params.prototype.getBaseData = function(aC) {
        return this._baseDataList[aC];
    };
    l2d_context_params.prototype.getParamFloat = function(aC) {
        return this._$_j[aC];
    };
    l2d_context_params.prototype.getParamMax = function(aC) {
        return this._paramMaxMap[aC];
    };
    l2d_context_params.prototype.getParamMin = function(aC) {
        return this._paramMinMap[aC];
    };
    l2d_context_params.prototype.setPartsOpacity = function(aE, aC) {
        var aD = this._parts[aE];
        aD.setPartsOpacity(aC);
    };
    l2d_context_params.prototype.getPartsOpacity = function(aD) {
        var aC = this._parts[aD];
        return aC.getPartsOpacity();
    };
    l2d_context_params.prototype.getPartsDataIndex = function(aD) {
        for (var aC = this._partsDataList.length - 1; aC >= 0; --aC) {
            if (this._partsDataList[aC] != null && this._partsDataList[aC].getPartsDataID() == aD) {
                return aC;
            }
        }
        return -1;
    };
    l2d_context_params.prototype.getBaseContext = function(baseDataIndex) {
        return this._$yk[baseDataIndex];
    };
    l2d_context_params.prototype.getDrawContext = function(aC) {
        return this._$Fk[aC];
    };
    l2d_context_params.prototype.getPartsContext = function(aC) {
        return this._parts[aC];
    };
    l2d_context_params.prototype.updateZBuffer_TestImpl = function(startZ, stepZ) {
        var aE = this._$lm.length;
        var aI = startZ;
        for (var aG = 0; aG < aE; ++aG) {
            var aD = this._$lm[aG];
            if (aD == l2d_context_params._$Nj) {
                continue;
            }
            do {
                var aH = this._$Fk[aD];
                if (aH._$7R()) {
                    aH._$Xf()._$cj(this, aH, aI);
                    aI += stepZ;
                }
                var aC = this._$hd[aD];
                if (aC <= aD || aC == l2d_context_params._$l2) {
                    break;
                }
                aD = aC;
            } while (true);
        }
    };

    function l2d_LDTransform() {
        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    l2d_LDTransform.prototype.setContext = function(aD) {
        var aC = this.m;
        aD.transform(aC[0], aC[1], aC[3], aC[4], aC[6], aC[7]);
    };
    l2d_LDTransform.prototype.toString = function() {
        var aD = "LDTransform { ";
        for (var aC = 0; aC < 9; aC++) {
            aD += this.m[aC].toFixed(2) + " ,";
        }
        aD += " }";
        return aD;
    };
    l2d_LDTransform.prototype.identity = function() {
        var aC = this.m;
        aC[0] = aC[4] = aC[8] = 1;
        aC[1] = aC[2] = aC[3] = aC[5] = aC[6] = aC[7] = 0;
    };
    l2d_LDTransform.prototype._$Hg = function(aD, aF, aE) {
        if (aE == null) {
            aE = new Array(0, 0);
        }
        var aC = this.m;
        aE[0] = aC[0] * aD + aC[3] * aF + aC[6];
        aE[1] = aC[1] * aD + aC[4] * aF + aC[7];
        return aE;
    };
    l2d_LDTransform.prototype._$Hj = function(aF) {
        if (!aF) {
            aF = new l2d_LDTransform();
        }
        var aD = this.m;
        var aO = aD[0];
        var aN = aD[1];
        var aM = aD[2];
        var aL = aD[3];
        var aK = aD[4];
        var aJ = aD[5];
        var aI = aD[6];
        var aH = aD[7];
        var aG = aD[8];
        var aE = aO * aK * aG + aN * aJ * aI + aM * aL * aH - aO * aJ * aH - aM * aK * aI - aN * aL * aG;
        if (aE == 0) {
            return null;
        } else {
            var aC = 1 / aE;
            aF.m[0] = aC * (aK * aG - aH * aJ);
            aF.m[1] = aC * (aH * aM - aN * aG);
            aF.m[2] = aC * (aN * aJ - aK * aM);
            aF.m[3] = aC * (aI * aJ - aL * aG);
            aF.m[4] = aC * (aO * aG - aI * aM);
            aF.m[5] = aC * (aL * aM - aO * aJ);
            aF.m[6] = aC * (aL * aH - aI * aK);
            aF.m[7] = aC * (aI * aN - aO * aH);
            aF.m[8] = aC * (aO * aK - aL * aN);
            return aF;
        }
    };
    l2d_LDTransform.prototype.transform = function(aD, aF, aE) {
        if (aE == null) {
            aE = new Array(0, 0);
        }
        var aC = this.m;
        aE[0] = aC[0] * aD + aC[3] * aF + aC[6];
        aE[1] = aC[1] * aD + aC[4] * aF + aC[7];
        return aE;
    };
    l2d_LDTransform.prototype.translate = function(aD, aE) {
        var aC = this.m;
        aC[6] = aC[0] * aD + aC[3] * aE + aC[6];
        aC[7] = aC[1] * aD + aC[4] * aE + aC[7];
        aC[8] = aC[2] * aD + aC[5] * aE + aC[8];
    };
    l2d_LDTransform.prototype.scale = function(aE, aD) {
        var aC = this.m;
        aC[0] *= aE;
        aC[1] *= aE;
        aC[2] *= aE;
        aC[3] *= aD;
        aC[4] *= aD;
        aC[5] *= aD;
    };
    l2d_LDTransform.prototype.shear = function(aH, aG) {
        var aC = this.m;
        var aF = aC[0] + aC[3] * aG;
        var aE = aC[1] + aC[4] * aG;
        var aD = aC[2] + aC[5] * aG;
        aC[3] = aC[0] * aH + aC[3];
        aC[4] = aC[1] * aH + aC[4];
        aC[5] = aC[2] * aH + aC[5];
        aC[0] = aF;
        aC[1] = aE;
        aC[2] = aD;
    };
    l2d_LDTransform.prototype.rotate = function(aH) {
        var aC = this.m;
        var aI = Math.cos(aH);
        var aG = Math.sin(aH);
        var aF = aC[0] * aI + aC[3] * aG;
        var aE = aC[1] * aI + aC[4] * aG;
        var aD = aC[2] * aI + aC[5] * aG;
        aC[3] = -aC[0] * aG + aC[3] * aI;
        aC[4] = -aC[1] * aG + aC[4] * aI;
        aC[5] = -aC[2] * aG + aC[5] * aI;
        aC[0] = aF;
        aC[1] = aE;
        aC[2] = aD;
    };
    l2d_LDTransform.prototype.concatenate = function(aG) {
        var aJ = this.m;
        var aH = aG.m;
        var aN = aJ[0] * aH[0] + aJ[3] * aH[1] + aJ[6] * aH[2];
        var aM = aJ[1] * aH[0] + aJ[4] * aH[1] + aJ[7] * aH[2];
        var aL = aJ[2] * aH[0] + aJ[5] * aH[1] + aJ[8] * aH[2];
        var aK = aJ[0] * aH[3] + aJ[3] * aH[4] + aJ[6] * aH[5];
        var aI = aJ[1] * aH[3] + aJ[4] * aH[4] + aJ[7] * aH[5];
        var aF = aJ[2] * aH[3] + aJ[5] * aH[4] + aJ[8] * aH[5];
        var aE = aJ[0] * aH[6] + aJ[3] * aH[7] + aJ[6] * aH[8];
        var aD = aJ[1] * aH[6] + aJ[4] * aH[7] + aJ[7] * aH[8];
        var aC = aJ[2] * aH[6] + aJ[5] * aH[7] + aJ[8] * aH[8];
        m[0] = aN;
        m[1] = aM;
        m[2] = aL;
        m[3] = aK;
        m[4] = aI;
        m[5] = aF;
        m[6] = aE;
        m[7] = aD;
        m[8] = aC;
    };

    function l2d_Live2DModelWebGL() {
        if (live2d_initializing) {
            return;
        }
        l2d_Live2DModelBase.prototype.constructor.call(this);
        this.drawParamWebGL = new l2d_drawParamWebGL();
    }
    l2d_Live2DModelWebGL.prototype = new l2d_Live2DModelBase();
    l2d_Live2DModelWebGL.loadModel = function(aD) {
        var aC = new l2d_Live2DModelWebGL();
        l2d_Live2DModelBase.loadModel_exe(aC, aD);
        return aC;
    };
    // l2d_Live2DModelWebGL._$eR = function() {
    //     var aC = new l2d_Live2DModelWebGL();
    //     return aC;
    // };
    // l2d_Live2DModelWebGL._$ud = function(aH) {
    //     var aE = new _$Y("../_$_d/_$e2/_$CP/_$_H._$y");
    //     if (aE.exists() == false) {
    //         throw new _$bm("_$e2 _$_ _$B _$1P :: " + aE._$HT());
    //     }
    //     var aC = ["../_$_d/_$e2/_$CP/_$_H.512/_$xH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$zH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$hH._$Z", "../_$_d/_$e2/_$CP/_$_H.512/_$WH._$Z"];
    //     var aF = l2d_Live2DModelWebGL.loadModel(aE._$Sk());
    //     for (var aD = 0; aD < aC.length; aD++) {
    //         var aG = new _$Y(aC[aD]);
    //         if (aG.exists() == false) {
    //             throw new _$bm("_$e2 _$_ _$B _$1P :: " + aG._$HT());
    //         }
    //         aF.setTexture(aD, _$oT._$_R(aH, aG._$Sk()));
    //     }
    //     return aF;
    // };
    l2d_Live2DModelWebGL.prototype.setGL = function(aC) {
        this.drawParamWebGL.setGL(aC);
    };
    l2d_Live2DModelWebGL.prototype.setTransform = function(aC) {
        this.drawParamWebGL.setTransform(aC);
    };
    l2d_Live2DModelWebGL.prototype.draw = function() {
        this._modelContext.draw(this.drawParamWebGL);
    };
    l2d_Live2DModelWebGL.prototype._$Dj = function() {
        this.drawParamWebGL._$Dj();
    };
    l2d_Live2DModelWebGL.prototype.setTexture = function(aD, aC) {
        if (this.drawParamWebGL == null) {
            l2d_UtDebug.error("_$9P for QT _$IP / _$rg() is _$B _$5P!!");
        }
        this.drawParamWebGL.setTexture(aD, aC);
    };
    l2d_Live2DModelWebGL.prototype.setTexture = function(aD, aC) {
        if (this.drawParamWebGL == null) {
            l2d_UtDebug.error("_$9P for QT _$IP / _$rg() is _$B _$5P!!");
        }
        this.drawParamWebGL.setTexture(aD, aC);
    };
    l2d_Live2DModelWebGL.prototype.generateModelTextureNo = function() {
        return this.drawParamWebGL.generateModelTextureNo();
    };
    l2d_Live2DModelWebGL.prototype.releaseModelTextureNo = function(aC) {
        this.drawParamWebGL.releaseModelTextureNo(aC);
    };
    l2d_Live2DModelWebGL.prototype.getDrawParam = function() {
        return this.drawParamWebGL;
    };
    l2d_Live2DModelWebGL.prototype.setMatrix = function(aC) {
        this.drawParamWebGL.setMatrix(aC);
    };

    function l2d_string() {}
    l2d_string.startsWith = function(aE, aG, aF) {
        var aC = aG + aF.length;
        if (aC >= aE.length) {
            return false;
        }
        for (var aD = aG; aD < aC; aD++) {
            if (l2d_string.getChar(aE, aD) != aF.charAt(aD - aG)) {
                return false;
            }
        }
        return true;
    };
    l2d_string.getChar = function(aD, aC) {
        return String.fromCharCode(aD.getUint8(aC));
    };
    l2d_string.createString = function(aH, aG, aE) {
        var aC = new ArrayBuffer(aE * 2);
        var aF = new Uint16Array(aC);
        for (var aD = 0; aD < aE; aD++) {
            aF[aD] = aH.getUint8(aG + aD);
        }
        return String.fromCharCode.apply(null, aF);
    };
    l2d_string._string2number = function(buffer_data, aH, aM, aF) {
        if (buffer_data instanceof ArrayBuffer) {
            buffer_data = new DataView(buffer_data);
        }
        var buffer_offset = aM;
        var isNegative = false;
        var isFloat = false;
        var aN = 0;
        var aJ = l2d_string.getChar(buffer_data, buffer_offset);
        if (aJ == "-") {
            isNegative = true;
            buffer_offset++;
        }
        var aI = false;
        for (; buffer_offset < aH; buffer_offset++) {
            aJ = l2d_string.getChar(buffer_data, buffer_offset);
            switch (aJ) {
            case "0":
                aN = aN * 10;
                break;
            case "1":
                aN = aN * 10 + 1;
                break;
            case "2":
                aN = aN * 10 + 2;
                break;
            case "3":
                aN = aN * 10 + 3;
                break;
            case "4":
                aN = aN * 10 + 4;
                break;
            case "5":
                aN = aN * 10 + 5;
                break;
            case "6":
                aN = aN * 10 + 6;
                break;
            case "7":
                aN = aN * 10 + 7;
                break;
            case "8":
                aN = aN * 10 + 8;
                break;
            case "9":
                aN = aN * 10 + 9;
                break;
            case ".":
                isFloat = true;
                buffer_offset++;
                aI = true;
                break;
            default:
                aI = true;
                break;
            }
            if (aI) {
                break;
            }
        }
        if (isFloat) {
            var aD = 0.1;
            var aC = false;
            for (; buffer_offset < aH; buffer_offset++) {
                aJ = l2d_string.getChar(buffer_data, buffer_offset);
                switch (aJ) {
                case "0":
                    break;
                case "1":
                    aN += aD * 1;
                    break;
                case "2":
                    aN += aD * 2;
                    break;
                case "3":
                    aN += aD * 3;
                    break;
                case "4":
                    aN += aD * 4;
                    break;
                case "5":
                    aN += aD * 5;
                    break;
                case "6":
                    aN += aD * 6;
                    break;
                case "7":
                    aN += aD * 7;
                    break;
                case "8":
                    aN += aD * 8;
                    break;
                case "9":
                    aN += aD * 9;
                    break;
                default:
                    aC = true;
                    break;
                }
                aD *= 0.1;
                if (aC) {
                    break;
                }
            }
        }
        if (isNegative) {
            aN = -aN;
        }
        aF[0] = buffer_offset;
        return aN;
    };

    function l2d_ParamDefSet() {
        if (live2d_initializing) {
            return;
        }
        this._paramDefSet = null;
    }
    l2d_ParamDefSet.prototype._getParamDefFloatList = function() {
        return this._paramDefSet;
    };
    l2d_ParamDefSet.prototype._initialize = function() {
        this._paramDefSet = new Array();
    };
    l2d_ParamDefSet.prototype._initWithBufferReader = function(bufferReader) {
        this._paramDefSet = bufferReader._getNextValue();
    };
    l2d_ParamDefSet.prototype._addParamDefFloat_TestImpl = function(paramDefFloat) {
        this._paramDefSet.push(paramDefFloat);
    };

    function l2d_drawParamWebGL() {
        if (live2d_initializing) {
            return;
        }
        l2d_drawParamBase.prototype.constructor.call(this);
        this.textures = new Array();
        this.transform = null;
        this.gl = null;
        this.firstDraw = true;
        this.anisotropyExt = null;
        this.maxAnisotropy = 0;
        this._$Vm = 32;
        this._$Xd = false;
        this._$tf = null;
        this._$zg = null;
        this._$oR = null;
    }
    l2d_drawParamWebGL.prototype = new l2d_drawParamBase();
    l2d_drawParamWebGL._create_array_32f = function(aC) {
        var aD = new Float32Array(aC);
        return aD;
    };
    l2d_drawParamWebGL._create_array_16i = function(aC) {
        var aD = new Int16Array(aC);
        return aD;
    };
    l2d_drawParamWebGL._$Ud = function(aD, aC) {
        if (aD == null || aD._$7T() < aC.length) {
            aD = l2d_drawParamWebGL._create_array_32f(aC.length * 2);
            aD.put(aC);
            aD._$Rf(0);
        } else {
            aD.clear();
            aD.put(aC);
            aD._$Rf(0);
        }
        return aD;
    };
    l2d_drawParamWebGL._$Kk = function(aD, aC) {
        if (aD == null || aD._$7T() < aC.length) {
            aD = l2d_drawParamWebGL._create_array_16i(aC.length * 2);
            aD.put(aC);
            aD._$Rf(0);
        } else {
            aD.clear();
            aD.put(aC);
            aD._$Rf(0);
        }
        return aD;
    };
    l2d_drawParamWebGL._$0m = function() {
        return this._$Xd;
    };
    l2d_drawParamWebGL._$Qm = function(aC) {
        this._$Xd = aC;
    };
    l2d_drawParamWebGL.prototype.setGL = function(aC) {
        this.gl = aC;
    };
    l2d_drawParamWebGL.prototype.setTransform = function(aC) {
        this.transform = aC;
    };
    l2d_drawParamWebGL.prototype._setupDraw = function() {
        var aC = this.gl;
        if (this.firstDraw) {
            this.initShader();
            this.firstDraw = false;
            this.anisotropyExt = aC.getExtension("EXT_texture_filter_anisotropic") || aC.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || aC.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (this.anisotropyExt) {
                this.maxAnisotropy = aC.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            }
        }
        aC.disable(aC.SCISSOR_TEST);
        aC.disable(aC.STENCIL_TEST);
        aC.disable(aC.DEPTH_TEST);
        aC.frontFace(aC.CW);
        aC.enable(aC.BLEND);
        aC.colorMask(1, 1, 1, 1);
        aC.bindBuffer(aC.ARRAY_BUFFER, null);
        aC.bindBuffer(aC.ELEMENT_ARRAY_BUFFER, null);
        aC.useProgram(this.shaderProgram);
        aC.enableVertexAttribArray(this.a_position_Loc);
        aC.enableVertexAttribArray(this.a_texCoord_Loc);
        aC.activeTexture(aC.TEXTURE0);
        aC.uniform1i(this.s_texture0_Loc, 0);
    };
    l2d_drawParamWebGL.prototype._drawTexture = function(aN, aO, aG, aP, aR, aI, aH, aJ) {
        if (aI < 0.01) {
            return;
        }
        var aD = aI > 0.9 ? l2d_Live2D.EXPAND_W : 0;
        var aV = this.gl;
        if (this.gl == null) {
            throw new Error("gl is null");
        }
        aV.useProgram(this.shaderProgram);
        if (this.culling) {
            this.gl.enable(aV.CULL_FACE);
        } else {
            this.gl.disable(aV.CULL_FACE);
        }
        this.gl.enable(aV.BLEND);
        var a0;
        var aS;
        var aM;
        var aF;
        var aT = true;
        switch (aH) {
        case b._$Km:
        default:
            if (aT) {
                a0 = aV.ONE;
            } else {
                a0 = aV.SRC_ALPHA;
            }
            aS = aV.ONE_MINUS_SRC_ALPHA;
            aM = aV.ONE;
            aF = aV.ONE_MINUS_SRC_ALPHA;
            break;
        case b._$om:
            a0 = aV.SRC_ALPHA;
            aS = aV.ONE;
            aM = aV.ZERO;
            aF = aV.ONE;
            break;
        case b._$_m:
            if (aT) {
                a0 = aV.DST_COLOR;
                aS = aV.ONE_MINUS_SRC_ALPHA;
            } else {
                a0 = aV.ZERO;
                aS = aV.SRC_COLOR;
            }
            aM = aV.ZERO;
            aF = aV.ONE;
            break;
        }
        aV.blendFuncSeparate(a0, aS, aM, aF);
        this._$zg = R(aV, this._$zg, aP);
        aV.enableVertexAttribArray(this.a_position_Loc);
        aV.vertexAttribPointer(this.a_position_Loc, 2, aV.FLOAT, false, 0, 0);
        var aC = false;
        if (aC) {
            checkError("drawTexture x1");
        }
        this._$tf = R(aV, this._$tf, aR);
        aV.enableVertexAttribArray(this.a_texCoord_Loc);
        aV.vertexAttribPointer(this.a_texCoord_Loc, 2, aV.FLOAT, false, 0, 0);
        if (aC) {
            checkError("drawTexture x2");
        }
        aV.bindTexture(aV.TEXTURE_2D, this.textures[aN]);
        if (this.anisotropyExt) {
            aV.texParameteri(aV.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
        }
        if (aC) {
            checkError("drawTexture x3");
        }
        var aL = 1;
        var aK = 1;
        var aX = 1;
        var aU = 1;
        var aQ = this._baseColor_r * aK;
        var aW = this._baseColor_g * aX;
        var aY = this._baseColor_b * aU;
        var aZ = this._baseColor_a * aI;
        if (aT) {
            aV.uniform4f(this.u_baseColor, aQ * aI, aW * aI, aY * aI, aZ);
        } else {
            aV.uniform4f(this.u_baseColor, aQ, aW, aY, aZ);
        }
        this._$oR = K(aV, this._$oR, aG);
        aV.enableVertexAttribArray(this.a_position_Loc);
        aV.uniformMatrix4fv(this.u_matrix_Loc, false, this.matrix4x4);
        var aE = aG.length;
        aV.drawElements(aV.TRIANGLES, aE, aV.UNSIGNED_SHORT, 0);
        aV.bindTexture(aV.TEXTURE_2D, null);
    };

    function R(aE, aC, aD) {
        if (aC == null) {
            aC = aE.createBuffer();
        }
        aE.bindBuffer(aE.ARRAY_BUFFER, aC);
        aE.bufferData(aE.ARRAY_BUFFER, aD, aE.DYNAMIC_DRAW);
        return aC;
    }
    function K(aE, aC, aD) {
        if (aC == null) {
            aC = aE.createBuffer();
        }
        aE.bindBuffer(aE.ELEMENT_ARRAY_BUFFER, aC);
        aE.bufferData(aE.ELEMENT_ARRAY_BUFFER, aD, aE.DYNAMIC_DRAW);
        return aC;
    }
    l2d_drawParamWebGL.prototype._generateModelTextureNo = function() {
        throw new Error("_generateModelTextureNo");
    };
    l2d_drawParamWebGL.prototype._releaseModelTextureNo = function(aC) {
        throw new Error("_releaseModelTextureNo");
    };
    l2d_drawParamWebGL.prototype._$Dj = function() {
        for (var aC = 0; aC < this.textures.length; aC++) {
            var aD = this.textures[aC];
            if (aD != 0) {
                this.gl._$Dj(1, this.textures, aC);
                this.textures[aC] = null;
            }
        }
    };
    l2d_drawParamWebGL.prototype.setTexture = function(aC, aD) {
        this.textures[aC] = aD;
    };
    l2d_drawParamWebGL.prototype.initShader = function() {
        var aC = this.gl;
        this.loadShaders2();
        this.a_position_Loc = aC.getAttribLocation(this.shaderProgram, "a_position");
        this.a_texCoord_Loc = aC.getAttribLocation(this.shaderProgram, "a_texCoord");
        this.s_texture0_Loc = aC.getUniformLocation(this.shaderProgram, "s_texture0");
        this.u_matrix_Loc = aC.getUniformLocation(this.shaderProgram, "modelViewProjectionMatrix");
        this.u_baseColor = aC.getUniformLocation(this.shaderProgram, "baseColor");
    };
    l2d_drawParamWebGL.prototype.disposeShader = function() {
        if (this.shaderProgram) {
            gl.deleteProgram(this.shaderProgram);
            this.shaderProgram = null;
        }
    };
    l2d_drawParamWebGL.prototype.compileShader = function(aE, aI) {
        var aH = this.gl;
        var aC;
        var aG = aI;
        var aF = aH.createShader(aE);
        if (aF == null) {
            l2d_UtDebug._$GP("_$T2 to create shader");
            return null;
        }
        aH.shaderSource(aF, aG);
        aH.compileShader(aF);
        var aC = aH.getShaderParameter(aF, aH.COMPILE_STATUS);
        if (!aC) {
            var aD = aH.getShaderInfoLog(aF);
            l2d_UtDebug._$GP("_$T2 to compile shader : " + aD);
            aH.deleteShader(aF);
            return null;
        }
        return aF;
    };
    l2d_drawParamWebGL.prototype.loadShaders2 = function() {
        var aI = this.gl;
        var aG;
        var aC;
        this.shaderProgram = aI.createProgram();
        if (!this.shaderProgram) {
            return false;
        }
        var aF = "attribute vec4 a_position;attribute vec2 a_texCoord;varying vec2 v_texCoord;uniform mat4 modelViewProjectionMatrix;void main(){  gl_Position = modelViewProjectionMatrix * a_position;  v_texCoord = a_texCoord ;}";
        var aH = "precision mediump float ;varying vec2 v_texCoord;uniform sampler2D s_texture0;uniform vec4 baseColor ;void main(){  vec4 f_tmp = texture2D(s_texture0 , v_texCoord) * baseColor ;  gl_FragColor = f_tmp ;}";
        aG = this.compileShader(aI.VERTEX_SHADER, aF);
        if (!aG) {
            l2d_UtDebug._$GP("Vertex shader compile error!");
            return false;
        }
        aC = this.compileShader(aI.FRAGMENT_SHADER, aH);
        if (!aC) {
            l2d_UtDebug._$GP("Fragment shader compile error!");
            return false;
        }
        aI.attachShader(this.shaderProgram, aG);
        aI.attachShader(this.shaderProgram, aC);
        aI.linkProgram(this.shaderProgram);
        var aD = aI.getProgramParameter(this.shaderProgram, aI.LINK_STATUS);
        if (!aD) {
            var aE = aI.getProgramInfoLog(this.shaderProgram);
            l2d_UtDebug._$GP("_$T2 to link program: " + aE);
            if (aG) {
                aI.deleteShader(aG);
                aG = 0;
            }
            if (aC) {
                aI.deleteShader(aC);
                aC = 0;
            }
            if (this.shaderProgram) {
                aI.deleteProgram(this.shaderProgram);
                this.shaderProgram = 0;
            }
            return false;
        }
        return true;
    };

    function l2d_Live2D() {}
    l2d_Live2D.__L2D_VERSION_STR__ = "2.0.04_1";
    l2d_Live2D.__L2D_VERSION_NO__ = 199900001;
    l2d_Live2D.L2D_SAMPLE = true;
    l2d_Live2D.L2D_VERBOSE = true;
    l2d_Live2D.L2D_DEBUG_IMPORT = false;
    l2d_Live2D.L2D_DEBUG = true;
    l2d_Live2D.L2D_TEMPORARY_DEBUG = true;
    l2d_Live2D.L2D_RANGE_CHECK = true;
    l2d_Live2D.L2D_RANGE_CHECK_POINT = true;
    l2d_Live2D.L2D_DEFORMER_EXTEND = true;
    l2d_Live2D.L2D_FORCE_UPDATE = false;
    l2d_Live2D.L2D_INVERT_TEXTURE = false;
    l2d_Live2D.L2D_OUTSIDE_PARAM_AVAILABLE = false;
    l2d_Live2D.L2D_NO_ERROR = 0;
    l2d_Live2D.L2D_ERROR_LIVE2D_INIT_FAILED = 1000;
    l2d_Live2D.L2D_ERROR_FILE_LOAD_FAILED = 1001;
    l2d_Live2D.L2D_ERROR_MEMORY_ERROR = 1100;
    l2d_Live2D.L2D_ERROR_MODEL_DATA_VERSION_MISMATCH = 2000;
    l2d_Live2D.L2D_ERROR_MODEL_DATA_EOF_ERROR = 2001;
    l2d_Live2D.L2D_ERROR_MODEL_DATA_UNKNOWN_FORMAT = 2002;
    l2d_Live2D.L2D_ERROR_DDTEXTURE_SETUP_TRANSFORM_FAILED = 4000;
    l2d_Live2D._$Bk = true;
    l2d_Live2D.errorNumber = 0;
    l2d_Live2D.IGNORE_CLIP = false;
    l2d_Live2D.IGNORE_EXPAND = false;
    l2d_Live2D.EXPAND_W = 2;
    l2d_Live2D.USE_ADJUST_TRANSLATION = true;
    l2d_Live2D.USE_CANVAS_TRANSFORM = true;
    l2d_Live2D.USE_CACHED_POLYGON_IMAGE = false;
    l2d_Live2D.DEBUG_DATA = {};
    l2d_Live2D.PROFILE_IOS_SPEED = {
        PROFILE_NAME: "iOS Speed",
        USE_ADJUST_TRANSLATION: true,
        USE_CACHED_POLYGON_IMAGE: true,
        EXPAND_W: 4
    };
    l2d_Live2D.PROFILE_IOS_QUALITY = {
        PROFILE_NAME: "iOS HiQ",
        USE_ADJUST_TRANSLATION: true,
        USE_CACHED_POLYGON_IMAGE: false,
        EXPAND_W: 2
    };
    l2d_Live2D.PROFILE_IOS_DEFAULT = l2d_Live2D.PROFILE_IOS_QUALITY;
    l2d_Live2D.PROFILE_ANDROID = {
        PROFILE_NAME: "Android",
        USE_ADJUST_TRANSLATION: false,
        USE_CACHED_POLYGON_IMAGE: false,
        EXPAND_W: 2
    };
    l2d_Live2D.PROFILE_DESKTOP = {
        PROFILE_NAME: "Desktop",
        USE_ADJUST_TRANSLATION: false,
        USE_CACHED_POLYGON_IMAGE: false,
        EXPAND_W: 2
    };
    l2d_Live2D.initProfile = function() {
        if (sys_env.isIOS()) {
            l2d_Live2D.setupProfile(l2d_Live2D.PROFILE_IOS_DEFAULT);
        } else {
            if (sys_env.isAndroid()) {
                l2d_Live2D.setupProfile(l2d_Live2D.PROFILE_ANDROID);
            } else {
                l2d_Live2D.setupProfile(l2d_Live2D.PROFILE_DESKTOP);
            }
        }
    };
    l2d_Live2D.setupProfile = function(aD, aE) {
        if (typeof aD == "number") {
            switch (aD) {
            case 9901:
                aD = l2d_Live2D.PROFILE_IOS_SPEED;
                break;
            case 9902:
                aD = l2d_Live2D.PROFILE_IOS_QUALITY;
                break;
            case 9903:
                aD = l2d_Live2D.PROFILE_IOS_DEFAULT;
                break;
            case 9904:
                aD = l2d_Live2D.PROFILE_ANDROID;
                break;
            case 9905:
                aD = l2d_Live2D.PROFILE_DESKTOP;
                break;
            default:
                alert("profile _$B _$1P : " + aD);
                break;
            }
        }
        if (arguments.length < 2) {
            aE = true;
        }
        if (aE) {
            console.log("profile : " + aD.PROFILE_NAME);
        }
        for (var aC in aD) {
            l2d_Live2D[aC] = aD[aC];
            if (aE) {
                console.log("  [" + aC + "] = " + aD[aC]);
            }
        }
    };
    l2d_Live2D.init = function() {
        if (l2d_Live2D._$Bk) {
            console.log("Live2D %s", l2d_Live2D.__L2D_VERSION_STR__);
            l2d_Live2D._$Bk = false;
            var aC = false;
            aC = true;
            l2d_Live2D.initProfile();
        }
    };
    l2d_Live2D.getVersionStr = function() {
        return l2d_Live2D.__L2D_VERSION_STR__;
    };
    l2d_Live2D.getVersionNo = function() {
        return l2d_Live2D.__L2D_VERSION_NO__;
    };
    l2d_Live2D.setError = function(errorNo) {
        l2d_Live2D.errorNumber = errorNo;
    };
    l2d_Live2D.getError = function() {
        var aC = l2d_Live2D.errorNumber;
        l2d_Live2D.errorNumber = 0;
        return aC;
    };
    l2d_Live2D.prototype.dispose = function() {
        l2d_BaseID._dispose();
    };

    function D() {
        if (live2d_initializing) {
            return;
        }
        c.prototype.constructor.call(this);
        this._$R = 0;
        this._$V = 0;
        this._$Xg = null;
        this._$hR = null;
    }
    D.prototype = new c();
    D._$sf = new Array();
    D.prototype._initialize = function() {
        this._$Xg = new g();
        this._$Xg._initialize();
    };
    D.prototype._initWithBufferReader = function(aC) {
        c.prototype._initWithBufferReader.call(this, aC);
        this._$V = aC._getNextInt32();
        this._$R = aC._getNextInt32();
        this._$Xg = aC._getNextValue();
        this._$hR = aC._getNextValue();
        c.prototype.readV2_opacity.call(this, aC);
    };
    D.prototype.init = function(aC) {
        var aD = new G(this);
        var aE = (this._$R + 1) * (this._$V + 1);
        if (aD._$xd != null) {
            aD._$xd = null;
        }
        aD._$xd = new Float32Array(aE * 2);
        if (aD._$vd != null) {
            aD._$vd = null;
        }
        if (this._$Sj()) {
            aD._$vd = new Float32Array(aE * 2);
        } else {
            aD._$vd = null;
        }
        return aD;
    };
    D.prototype._$td = function(aE, aD) {
        var aF = aD;
        if (!this._$Xg._$1d(aE)) {
            return;
        }
        var aG = this._$Nf();
        var aC = D._$sf;
        aC[0] = false;
        aB._$Nd(aE, this._$Xg, aC, aG, this._$hR, aF._$xd, 0, 2);
        aD._$4k(aC[0]);
        this.interpolateOpacity(aE, this._$Xg, aD, aC);
    };
    D.prototype._$jk = function(aF, aE) {
        var aG = aE;
        aG._$vg(true);
        if (!this._$Sj()) {
            aG.setTotalOpacity(aG.getInterpolatedOpacity());
        } else {
            var aC = this.getTargetBaseDataID();
            if (aG._$Fd == c._$5d) {
                aG._$Fd = aF.getBaseDataIndex(aC);
            }
            if (aG._$Fd < 0) {
                if (l2d_Live2D.L2D_VERBOSE) {
                    l2d_UtDebug.error("_$T _$2H _$X :: %s", aC);
                }
                aG._$vg(false);
            } else {
                var aI = aF.getBaseData(aG._$Fd);
                var aD = aF.getBaseContext(aG._$Fd);
                if (aI != null && aD._$7R()) {
                    var aH = aD.getTotalScale();
                    aG.setTotalScale_notForClient(aH);
                    var aJ = aD.getTotalOpacity();
                    aG.setTotalOpacity(aJ * aG.getInterpolatedOpacity());
                    aI._$ok(aF, aD, aG._$xd, aG._$vd, this._$Nf(), 0, 2);
                    aG._$vg(true);
                } else {
                    aG._$vg(false);
                }
            }
        }
    };
    D.prototype._$ok = function(aG, aD, aC, aH, aJ, aF, aE) {
        if (true) {
            var aI = aD;
            var aK = (aI._$vd != null) ? aI._$vd : aI._$xd;
            D.transformPoints_sdk2(aC, aH, aJ, aF, aE, aK, this._$R, this._$V);
        } else {
            this.transformPoints_sdk1(aG, aD, aC, aH, aJ, aF, aE);
        }
    };
    D.transformPoints_sdk2 = function(aV, a7, a0, aK, aD, aM, aL, aP) {
        var aR = a0 * aD;
        var aQ;
        var bi, bh;
        var aO = 0;
        var aN = 0;
        var bg = 0;
        var bf = 0;
        var ba = 0;
        var a9 = 0;
        var aU = false;
        for (var a5 = aK; a5 < aR; a5 += aD) {
            var a8, a2, aZ, aS;
            aZ = aV[a5];
            aS = aV[a5 + 1];
            a8 = aZ * aL;
            a2 = aS * aP;
            if (a8 < 0 || a2 < 0 || aL <= a8 || aP <= a2) {
                var aW = aL + 1;
                if (!aU) {
                    aU = true;
                    aO = 0.25 * (aM[((0) + (0) * aW) * 2] + aM[((aL) + (0) * aW) * 2] + aM[((0) + (aP) * aW) * 2] + aM[((aL) + (aP) * aW) * 2]);
                    aN = 0.25 * (aM[((0) + (0) * aW) * 2 + 1] + aM[((aL) + (0) * aW) * 2 + 1] + aM[((0) + (aP) * aW) * 2 + 1] + aM[((aL) + (aP) * aW) * 2 + 1]);
                    var aH = aM[((aL) + (aP) * aW) * 2] - aM[((0) + (0) * aW) * 2];
                    var aG = aM[((aL) + (aP) * aW) * 2 + 1] - aM[((0) + (0) * aW) * 2 + 1];
                    var bc = aM[((aL) + (0) * aW) * 2] - aM[((0) + (aP) * aW) * 2];
                    var bb = aM[((aL) + (0) * aW) * 2 + 1] - aM[((0) + (aP) * aW) * 2 + 1];
                    bg = (aH + bc) * 0.5;
                    bf = (aG + bb) * 0.5;
                    ba = (aH - bc) * 0.5;
                    a9 = (aG - bb) * 0.5;
                    if (bg == 0 && bf == 0) {}
                    if (ba == 0 && a9 == 0) {}
                    aO -= 0.5 * (bg + ba);
                    aN -= 0.5 * (bf + a9);
                }
                if ((-2 < aZ && aZ < 3) && (-2 < aS && aS < 3)) {
                    if (aZ <= 0) {
                        if (aS <= 0) {
                            var aY = aM[((0) + (0) * aW) * 2];
                            var aX = aM[((0) + (0) * aW) * 2 + 1];
                            var a3 = aO - 2 * bg;
                            var a1 = aN - 2 * bf;
                            var aF = aO - 2 * ba;
                            var aE = aN - 2 * a9;
                            var aJ = aO - 2 * bg - 2 * ba;
                            var aI = aN - 2 * bf - 2 * a9;
                            var be = 0.5 * (aZ - (-2));
                            var bd = 0.5 * (aS - (-2));
                            if (be + bd <= 1) {
                                a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                            } else {
                                a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                            }
                        } else {
                            if (aS >= 1) {
                                var aF = aM[((0) + (aP) * aW) * 2];
                                var aE = aM[((0) + (aP) * aW) * 2 + 1];
                                var aJ = aO - 2 * bg + 1 * ba;
                                var aI = aN - 2 * bf + 1 * a9;
                                var aY = aO + 3 * ba;
                                var aX = aN + 3 * a9;
                                var a3 = aO - 2 * bg + 3 * ba;
                                var a1 = aN - 2 * bf + 3 * a9;
                                var be = 0.5 * (aZ - (-2));
                                var bd = 0.5 * (aS - (1));
                                if (be + bd <= 1) {
                                    a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                    a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                } else {
                                    a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                    a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                }
                            } else {
                                var aC = (a2 | 0);
                                if (aC == aP) {
                                    aC = aP - 1;
                                }
                                var be = 0.5 * (aZ - (-2));
                                var bd = a2 - aC;
                                var a6 = aC / aP;
                                var a4 = (aC + 1) / aP;
                                var aF = aM[((0) + (aC) * aW) * 2];
                                var aE = aM[((0) + (aC) * aW) * 2 + 1];
                                var aY = aM[((0) + (aC + 1) * aW) * 2];
                                var aX = aM[((0) + (aC + 1) * aW) * 2 + 1];
                                var aJ = aO - 2 * bg + a6 * ba;
                                var aI = aN - 2 * bf + a6 * a9;
                                var a3 = aO - 2 * bg + a4 * ba;
                                var a1 = aN - 2 * bf + a4 * a9;
                                if (be + bd <= 1) {
                                    a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                    a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                } else {
                                    a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                    a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                }
                            }
                        }
                    } else {
                        if (1 <= aZ) {
                            if (aS <= 0) {
                                var a3 = aM[((aL) + (0) * aW) * 2];
                                var a1 = aM[((aL) + (0) * aW) * 2 + 1];
                                var aY = aO + 3 * bg;
                                var aX = aN + 3 * bf;
                                var aJ = aO + 1 * bg - 2 * ba;
                                var aI = aN + 1 * bf - 2 * a9;
                                var aF = aO + 3 * bg - 2 * ba;
                                var aE = aN + 3 * bf - 2 * a9;
                                var be = 0.5 * (aZ - (1));
                                var bd = 0.5 * (aS - (-2));
                                if (be + bd <= 1) {
                                    a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                    a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                } else {
                                    a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                    a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                }
                            } else {
                                if (aS >= 1) {
                                    var aJ = aM[((aL) + (aP) * aW) * 2];
                                    var aI = aM[((aL) + (aP) * aW) * 2 + 1];
                                    var aF = aO + 3 * bg + 1 * ba;
                                    var aE = aN + 3 * bf + 1 * a9;
                                    var a3 = aO + 1 * bg + 3 * ba;
                                    var a1 = aN + 1 * bf + 3 * a9;
                                    var aY = aO + 3 * bg + 3 * ba;
                                    var aX = aN + 3 * bf + 3 * a9;
                                    var be = 0.5 * (aZ - (1));
                                    var bd = 0.5 * (aS - (1));
                                    if (be + bd <= 1) {
                                        a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                        a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                    } else {
                                        a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                        a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                    }
                                } else {
                                    var aC = (a2 | 0);
                                    if (aC == aP) {
                                        aC = aP - 1;
                                    }
                                    var be = 0.5 * (aZ - (1));
                                    var bd = a2 - aC;
                                    var a6 = aC / aP;
                                    var a4 = (aC + 1) / aP;
                                    var aJ = aM[((aL) + (aC) * aW) * 2];
                                    var aI = aM[((aL) + (aC) * aW) * 2 + 1];
                                    var a3 = aM[((aL) + (aC + 1) * aW) * 2];
                                    var a1 = aM[((aL) + (aC + 1) * aW) * 2 + 1];
                                    var aF = aO + 3 * bg + a6 * ba;
                                    var aE = aN + 3 * bf + a6 * a9;
                                    var aY = aO + 3 * bg + a4 * ba;
                                    var aX = aN + 3 * bf + a4 * a9;
                                    if (be + bd <= 1) {
                                        a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                        a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                    } else {
                                        a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                        a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                    }
                                }
                            }
                        } else {
                            if (aS <= 0) {
                                var aT = (a8 | 0);
                                if (aT == aL) {
                                    aT = aL - 1;
                                }
                                var be = a8 - aT;
                                var bd = 0.5 * (aS - (-2));
                                var bk = aT / aL;
                                var bj = (aT + 1) / aL;
                                var a3 = aM[((aT) + (0) * aW) * 2];
                                var a1 = aM[((aT) + (0) * aW) * 2 + 1];
                                var aY = aM[((aT + 1) + (0) * aW) * 2];
                                var aX = aM[((aT + 1) + (0) * aW) * 2 + 1];
                                var aJ = aO + bk * bg - 2 * ba;
                                var aI = aN + bk * bf - 2 * a9;
                                var aF = aO + bj * bg - 2 * ba;
                                var aE = aN + bj * bf - 2 * a9;
                                if (be + bd <= 1) {
                                    a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                    a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                } else {
                                    a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                    a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                }
                            } else {
                                if (aS >= 1) {
                                    var aT = (a8 | 0);
                                    if (aT == aL) {
                                        aT = aL - 1;
                                    }
                                    var be = a8 - aT;
                                    var bd = 0.5 * (aS - (1));
                                    var bk = aT / aL;
                                    var bj = (aT + 1) / aL;
                                    var aJ = aM[((aT) + (aP) * aW) * 2];
                                    var aI = aM[((aT) + (aP) * aW) * 2 + 1];
                                    var aF = aM[((aT + 1) + (aP) * aW) * 2];
                                    var aE = aM[((aT + 1) + (aP) * aW) * 2 + 1];
                                    var a3 = aO + bk * bg + 3 * ba;
                                    var a1 = aN + bk * bf + 3 * a9;
                                    var aY = aO + bj * bg + 3 * ba;
                                    var aX = aN + bj * bf + 3 * a9;
                                    if (be + bd <= 1) {
                                        a7[a5] = aJ + (aF - aJ) * be + (a3 - aJ) * bd;
                                        a7[a5 + 1] = aI + (aE - aI) * be + (a1 - aI) * bd;
                                    } else {
                                        a7[a5] = aY + (a3 - aY) * (1 - be) + (aF - aY) * (1 - bd);
                                        a7[a5 + 1] = aX + (a1 - aX) * (1 - be) + (aE - aX) * (1 - bd);
                                    }
                                } else {
                                    System.err.printf("error calc : %.4f , %.4f                  @@BDBoxGrid\n", aZ, aS);
                                }
                            }
                        }
                    }
                } else {
                    a7[a5] = aO + aZ * bg + aS * ba;
                    a7[a5 + 1] = aN + aZ * bf + aS * a9;
                }
            } else {
                bi = a8 - (a8 | 0);
                bh = a2 - (a2 | 0);
                aQ = 2 * ((a8 | 0) + ((a2 | 0)) * (aL + 1));
                if (bi + bh < 1) {
                    a7[a5] = aM[aQ] * (1 - bi - bh) + aM[aQ + 2] * bi + aM[aQ + 2 * (aL + 1)] * bh;
                    a7[a5 + 1] = aM[aQ + 1] * (1 - bi - bh) + aM[aQ + 3] * bi + aM[aQ + 2 * (aL + 1) + 1] * bh;
                } else {
                    a7[a5] = aM[aQ + 2 * (aL + 1) + 2] * (bi - 1 + bh) + aM[aQ + 2 * (aL + 1)] * (1 - bi) + aM[aQ + 2] * (1 - bh);
                    a7[a5 + 1] = aM[aQ + 2 * (aL + 1) + 3] * (bi - 1 + bh) + aM[aQ + 2 * (aL + 1) + 1] * (1 - bi) + aM[aQ + 3] * (1 - bh);
                }
            }
        }
    };
    D.prototype.transformPoints_sdk1 = function(aE, aM, aG, aV, aP, aK, aU) {
        var aC = aM;
        var aJ, aI;
        var aH = this._$R;
        var aL = this._$V;
        var aD = aP * aU;
        var aN, aT;
        var aQ;
        var aS, aR;
        var aO = (aC._$vd != null) ? aC._$vd : aC._$xd;
        for (var aF = aK; aF < aD; aF += aU) {
            if (l2d_Live2D.L2D_RANGE_CHECK_POINT) {
                aJ = aG[aF];
                aI = aG[aF + 1];
                if (aJ < 0) {
                    aJ = 0;
                } else {
                    if (aJ > 1) {
                        aJ = 1;
                    }
                }
                if (aI < 0) {
                    aI = 0;
                } else {
                    if (aI > 1) {
                        aI = 1;
                    }
                }
                aJ *= aH;
                aI *= aL;
                aN = (aJ | 0);
                aT = (aI | 0);
                if (aN > aH - 1) {
                    aN = aH - 1;
                }
                if (aT > aL - 1) {
                    aT = aL - 1;
                }
                aS = aJ - aN;
                aR = aI - aT;
                aQ = 2 * (aN + aT * (aH + 1));
            } else {
                aJ = aG[aF] * aH;
                aI = aG[aF + 1] * aL;
                aS = aJ - (aJ | 0);
                aR = aI - (aI | 0);
                aQ = 2 * ((aJ | 0) + (aI | 0) * (aH + 1));
            }
            if (aS + aR < 1) {
                aV[aF] = aO[aQ] * (1 - aS - aR) + aO[aQ + 2] * aS + aO[aQ + 2 * (aH + 1)] * aR;
                aV[aF + 1] = aO[aQ + 1] * (1 - aS - aR) + aO[aQ + 3] * aS + aO[aQ + 2 * (aH + 1) + 1] * aR;
            } else {
                aV[aF] = aO[aQ + 2 * (aH + 1) + 2] * (aS - 1 + aR) + aO[aQ + 2 * (aH + 1)] * (1 - aS) + aO[aQ + 2] * (1 - aR);
                aV[aF + 1] = aO[aQ + 2 * (aH + 1) + 3] * (aS - 1 + aR) + aO[aQ + 2 * (aH + 1) + 1] * (1 - aS) + aO[aQ + 3] * (1 - aR);
            }
        }
    };
    D.prototype._$Nf = function() {
        return (this._$R + 1) * (this._$V + 1);
    };
    D.prototype.getType = function() {
        return c._type2;
    };

    function G(aC) {
        A.prototype.constructor.call(this, aC);
        this._$Fd = c._$5d;
        this._$xd = null;
        this._$vd = null;
    }
    G.prototype = new A();

    function l2d_PhysicsHair() {
        if (live2d_initializing) {
            return;
        }
        this.p1 = new M();
        this.p2 = new M();
        this._$OR = 0;
        this._$wk = 0;
        this._$Tj = 0;
        this._$8j = 0;
        this._$Im = 0;
        this._$Ek = 0;
        this._$PH = 0;
        this._$Pf = 0;
        this._$bT = new Array();
        this._$MH = new Array();
        this.setup(0.3, 0.5, 0.1);
    }
    l2d_PhysicsHair.prototype.setup = function(aE, aD, aC) {
        this._$Im = this._$9k();
        this.p2._$3f();
        if (arguments.length == 3) {
            this._$OR = aE;
            this._$Tj = aD;
            this.p1._$W = aC;
            this.p2._$W = aC;
            this.p2.y = aE;
            this.setup();
        }
    };
    l2d_PhysicsHair.prototype.getPhysicsPoint1 = function() {
        return this.p1;
    };
    l2d_PhysicsHair.prototype.getPhysicsPoint2 = function() {
        return this.p2;
    };
    l2d_PhysicsHair.prototype._$Md = function() {
        return this._$wk;
    };
    l2d_PhysicsHair.prototype._$Wd = function(aC) {
        this._$wk = aC;
    };
    l2d_PhysicsHair.prototype._$Yd = function() {
        return this._$8j;
    };
    l2d_PhysicsHair.prototype._$xm = function() {
        return this._$Ek;
    };
    l2d_PhysicsHair.prototype._$9k = function() {
        return (-180 * (Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y))) / Math.PI);
    };
    l2d_PhysicsHair.prototype.addSrcParam = function(aE, aC, aG, aD) {
        var aF = new h(aE, aC, aG, aD);
        this._$bT.push(aF);
    };
    l2d_PhysicsHair.prototype.addTargetParam = function(aE, aC, aF, aD) {
        var aG = new az(aE, aC, aF, aD);
        this._$MH.push(aG);
    };
    l2d_PhysicsHair.prototype.update = function(aD, aG) {
        if (this._$PH == 0) {
            this._$PH = this._$Pf = aG;
            this._$OR = (Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
            return;
        }
        var aF = (aG - this._$Pf) / 1000;
        if (aF != 0) {
            for (var aE = this._$bT.length - 1; aE >= 0; --aE) {
                var aH = this._$bT[aE];
                aH._$RH(aD, this);
            }
            this._$RR(aD, aF);
            this._$8j = this._$9k();
            this._$Ek = (this._$8j - this._$Im) / aF;
            this._$Im = this._$8j;
        }
        for (var aE = this._$MH.length - 1; aE >= 0; --aE) {
            var aC = this._$MH[aE];
            aC._$9g(aD, this);
        }
        this._$Pf = aG;
    };
    l2d_PhysicsHair.prototype._$RR = function(aI, aD) {
        var aP = 1 / aD;
        this.p1.vx = (this.p1.x - this.p1._$m2) * aP;
        this.p1.vy = (this.p1.y - this.p1._$a2) * aP;
        this.p1.ax = (this.p1.vx - this.p1._$aT) * aP;
        this.p1.ay = (this.p1.vy - this.p1._$0T) * aP;
        this.p1.fx = this.p1.ax * this.p1._$W;
        this.p1.fy = this.p1.ay * this.p1._$W;
        this.p1._$3f();
        var aH = -(Math.atan2((this.p1.y - this.p2.y), this.p1.x - this.p2.x));
        var aG;
        var aQ;
        var aM = Math.cos(aH);
        var aC = Math.sin(aH);
        var aR = 9.8 * this.p2._$W;
        var aL = (this._$wk * l2d_math._degree2radian_factor);
        var aK = (aR * Math.cos(aH - aL));
        aG = (aK * aC);
        aQ = (aK * aM);
        var aF = (-this.p1.fx * aC * aC);
        var aO = (-this.p1.fy * aC * aM);
        var aE = ((-this.p2.vx * this._$Tj));
        var aN = ((-this.p2.vy * this._$Tj));
        this.p2.fx = ((aG + aF + aE));
        this.p2.fy = ((aQ + aO + aN));
        this.p2.ax = this.p2.fx / this.p2._$W;
        this.p2.ay = this.p2.fy / this.p2._$W;
        this.p2.vx += this.p2.ax * aD;
        this.p2.vy += this.p2.ay * aD;
        this.p2.x += this.p2.vx * aD;
        this.p2.y += this.p2.vy * aD;
        var aJ = (Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
        this.p2.x = this.p1.x + this._$OR * (this.p2.x - this.p1.x) / aJ;
        this.p2.y = this.p1.y + this._$OR * (this.p2.y - this.p1.y) / aJ;
        this.p2.vx = (this.p2.x - this.p2._$m2) * aP;
        this.p2.vy = (this.p2.y - this.p2._$a2) * aP;
        this.p2._$3f();
    };

    function M() {
        this._$W = 1;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.fx = 0;
        this.fy = 0;
        this._$m2 = 0;
        this._$a2 = 0;
        this._$aT = 0;
        this._$0T = 0;
    }
    M.prototype._$3f = function() {
        this._$m2 = this.x;
        this._$a2 = this.y;
        this._$aT = this.vx;
        this._$0T = this.vy;
    };

    function an(aE, aD, aC) {
        this._paramID = null;
        this.scale = null;
        this._$N2 = null;
        this._paramID = aE;
        this.scale = aD;
        this._$N2 = aC;
    }
    an.prototype._$RH = function(aD, aC) {};

    function h(aE, aF, aD, aC) {
        an.prototype.constructor.call(this, aF, aD, aC);
        this._$eT = null;
        this._$eT = aE;
    }
    h.prototype = new an();
    h.prototype._$RH = function(aE, aC) {
        var aF = this.scale * aE.getParamFloat(this._paramID);
        var aG = aC.getPhysicsPoint1();
        switch (this._$eT) {
        default:
        case l2d_PhysicsHair.Src.SRC_TO_X:
            aG.x = aG.x + (aF - aG.x) * this._$N2;
            break;
        case l2d_PhysicsHair.Src.SRC_TO_Y:
            aG.y = aG.y + (aF - aG.y) * this._$N2;
            break;
        case l2d_PhysicsHair.Src.SRC_TO_G_ANGLE:
            var aD = aC._$Md();
            aD = aD + (aF - aD) * this._$N2;
            aC._$Wd(aD);
            break;
        }
    };

    function d(aE, aD, aC) {
        this._paramID = null;
        this.scale = null;
        this._$N2 = null;
        this._paramID = aE;
        this.scale = aD;
        this._$N2 = aC;
    }
    d.prototype._$9g = function(aD, aC) {};

    function az(aD, aF, aE, aC) {
        d.prototype.constructor.call(this, aF, aE, aC);
        this._$9H = null;
        this._$9H = aD;
    }
    az.prototype = new d();
    az.prototype._$9g = function(aD, aC) {
        switch (this._$9H) {
        default:
        case l2d_PhysicsHair.Target.TARGET_FROM_ANGLE:
            aD.setParamFloat(this._paramID, this.scale * aC._$Yd(), this._$N2);
            break;
        case l2d_PhysicsHair.Target.TARGET_FROM_ANGLE_V:
            aD.setParamFloat(this._paramID, this.scale * aC._$xm(), this._$N2);
            break;
        }
    };
    l2d_PhysicsHair.Src = function() {};
    l2d_PhysicsHair.Src.SRC_TO_X = "SRC_TO_X";
    l2d_PhysicsHair.Src.SRC_TO_Y = "SRC_TO_Y";
    l2d_PhysicsHair.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE";
    l2d_PhysicsHair.Target = function() {};
    l2d_PhysicsHair.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE";
    l2d_PhysicsHair.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V";
    window.UtSystem = l2d_UtSystem;
    window.UtDebug = l2d_UtDebug;
    window.LDTransform = l2d_LDTransform;
    window.LDGL = l2d_LDGL;
    window.Live2D = l2d_Live2D;
    window.Live2DModelWebGL = l2d_Live2DModelWebGL;
    window.Live2DModelJS = l2d_Live2DModelJS;
    window.Live2DMotion = l2d_Live2DMotion;
    window.MotionQueueManager = l2d_MotionQueueManager;
    window.PhysicsHair = l2d_PhysicsHair;
    window.AMotion = l2d_AMotion;
    window.PartsDataID = l2d_PartsDataID;
    window.DrawDataID = l2d_DrawDataID;
    window.BaseDataID = l2d_BaseDataID;
    window.ParamID = l2d_ParamID;
    l2d_Live2D.init();
    var live2d_initializing = false;
})();