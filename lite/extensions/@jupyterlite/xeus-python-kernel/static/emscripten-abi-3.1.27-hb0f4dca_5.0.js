var Module=void 0!==globalThis.Module?globalThis.Module:{};Module.expectedDataFileDownloads||(Module.expectedDataFileDownloads=0),Module.expectedDataFileDownloads++,Module.ENVIRONMENT_IS_PTHREAD||function(e){"object"==typeof window?window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/"):"undefined"==typeof process&&"undefined"!=typeof location&&encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/");var a="emscripten-abi-3.1.27-hb0f4dca_5.0.data",o="emscripten-abi-3.1.27-hb0f4dca_5.0.data";"function"!=typeof Module.locateFilePackage||Module.locateFile||(Module.locateFile=Module.locateFilePackage,err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var t,l,d,n,u=Module.locateFile?Module.locateFile(o,""):o,s=e.remote_package_size,r=null,i=Module.getPreloadedPackage?Module.getPreloadedPackage(u,s):null;function c(){function o(e,a){if(!e)throw a+(new Error).stack}function t(a){o(a,"Loading data file failed."),o(a.constructor.name===ArrayBuffer.name,"bad input to processPackageData");var t=new Uint8Array(a),l={data:null,cachedOffset:82,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0],sizes:[82],successes:[1]};l.data=t,o("object"==typeof Module.LZ4,"LZ4 not present - was your app build with -sLZ4?"),Module.LZ4.loadPackage({metadata:e,compressedData:l},!0),Module.removeRunDependency("datafile_emscripten-abi-3.1.27-hb0f4dca_5.0.data")}Module.FS_createPath("/","tmp",!0,!0),Module.FS_createPath("/tmp","xeus-python-kernel",!0,!0),Module.FS_createPath("/tmp/xeus-python-kernel","envs",!0,!0),Module.FS_createPath("/tmp/xeus-python-kernel/envs","xeus-python-kernel",!0,!0),Module.FS_createPath("/tmp/xeus-python-kernel/envs/xeus-python-kernel","conda-meta",!0,!0),Module.addRunDependency("datafile_emscripten-abi-3.1.27-hb0f4dca_5.0.data"),Module.preloadResults||(Module.preloadResults={}),Module.preloadResults[a]={fromCache:!1},i?(t(i),i=null):r=t}i||(t=u,l=s,d=function(e){r?(r(e),r=null):i=e},(n=new XMLHttpRequest).open("GET",t,!0),n.responseType="arraybuffer",n.onprogress=function(e){var o=t,d=l;if(e.total&&(d=e.total),e.loaded){n.addedTotal?Module.dataFileDownloads[o].loaded=e.loaded:(n.addedTotal=!0,Module.dataFileDownloads||(Module.dataFileDownloads={}),Module.dataFileDownloads[o]={loaded:e.loaded,total:d});var u=0,s=0,r=0;for(var i in Module.dataFileDownloads){var c=Module.dataFileDownloads[i];u+=c.total,s+=c.loaded,r++}u=Math.ceil(u*Module.expectedDataFileDownloads/r),Module.empackSetStatus&&Module.empackSetStatus("Downloading",a,s,u),Module.setStatus&&Module.setStatus("Downloading data... ("+s+"/"+u+")")}else Module.dataFileDownloads||Module.setStatus&&Module.setStatus("Downloading data...")},n.onerror=function(e){throw new Error("NetworkError for: "+t)},n.onload=function(e){if(!(200==n.status||304==n.status||206==n.status||0==n.status&&n.response))throw new Error(n.statusText+" : "+n.responseURL);var a=n.response;d(a)},n.send(null)),Module.calledRun?c():(Module.preRun||(Module.preRun=[]),Module.preRun.push(c))}({files:[{filename:"/tmp/xeus-python-kernel/envs/xeus-python-kernel/conda-meta/emscripten-abi-3.1.27-hb0f4dca_5.json",start:0,end:89}]});