function s(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}const i={isoName:"uk",nativeName:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",label:{clear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438",ok:"OK",cancel:"\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",close:"\u0417\u0430\u043A\u0440\u0438\u0442\u0438",set:"\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438",select:"\u041E\u0431\u0440\u0430\u0442\u0438",reset:"\u0421\u043A\u0438\u043D\u0443\u0442\u0438",remove:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",update:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438",create:"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",search:"\u041F\u043E\u0448\u0443\u043A",filter:"\u0424\u0456\u043B\u044C\u0442\u0440",refresh:"\u041E\u043D\u043E\u0432\u0438\u0442\u0438",expand:e=>e?`\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 "${e}"`:"\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438",collapse:e=>e?`\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 "${e}"`:"\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438"},date:{days:"\u041D\u0435\u0434\u0456\u043B\u044F_\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0421\u0435\u0440\u0435\u0434\u0430_\u0427\u0435\u0442\u0432\u0435\u0440_\u041F`\u044F\u0442\u043D\u0438\u0446\u044F_\u0421\u0443\u0431\u043E\u0442\u0430".split("_"),daysShort:"\u041D\u0434_\u041F\u043D_\u0412\u0442_\u0421\u0440_\u0427\u0442_\u041F\u0442_\u0421\u0431".split("_"),months:"\u0421\u0456\u0447\u0435\u043D\u044C_\u041B\u044E\u0442\u0438\u0439_\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u041A\u0432\u0456\u0442\u0435\u043D\u044C_\u0422\u0440\u0430\u0432\u0435\u043D\u044C_\u0427\u0435\u0440\u0432\u0435\u043D\u044C_\u041B\u0438\u043F\u0435\u043D\u044C_\u0421\u0435\u0440\u043F\u0435\u043D\u044C_\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0416\u043E\u0432\u0442\u0435\u043D\u044C_\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0413\u0440\u0443\u0434\u0435\u043D\u044C".split("_"),monthsShort:"\u0421\u0456\u0447_\u041B\u044E\u0442_\u0411\u0435\u0440_\u041A\u0432\u0456_\u0422\u0440\u0430_\u0427\u0435\u0440_\u041B\u0438\u043F_\u0421\u0435\u0440_\u0412\u0435\u0440_\u0416\u043E\u0432_\u041B\u0438\u0441_\u0413\u0440\u0443".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"\u0434\u043D\u0456\u0432"},table:{noData:"\u041D\u0435\u043C\u0430\u0454 \u0434\u0430\u043D\u0438\u0445",noResults:"\u0421\u043F\u0456\u0432\u043F\u0430\u0434\u0456\u043D\u044C \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",loading:"\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F...",selectedRecords:e=>e>0?e+" "+s(e,["\u0440\u044F\u0434\u043E\u043A \u043E\u0431\u0440\u0430\u043D\u0438\u0439","\u0440\u044F\u0434\u043A\u0438 \u043E\u0431\u0440\u0430\u043D\u0456","\u0440\u044F\u0434\u043A\u0456\u0432 \u043E\u0431\u0440\u0430\u043D\u043E"])+".":"\u0416\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u044F\u0434\u043A\u0443 \u043D\u0435 \u043E\u0431\u0440\u0430\u043D\u043E.",recordsPerPage:"\u0420\u044F\u0434\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456:",allRows:"\u0423\u0441\u0456",pagination:(e,t,r)=>e+"-"+t+" \u0437 "+r,columns:"\u041A\u043E\u043B\u043E\u043D\u043A\u0438"},editor:{url:"URL",bold:"\u041D\u0430\u043F\u0456\u0432\u0436\u0438\u0440\u043D\u0438\u0439",italic:"\u041A\u0443\u0440\u0441\u0438\u0432",strikethrough:"\u0417\u0430\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",underline:"\u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",unorderedList:"\u041C\u0430\u0440\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",orderedList:"\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",subscript:"\u041F\u0456\u0434\u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439",superscript:"\u041D\u0430\u0434\u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439",hyperlink:"\u0413\u0456\u043F\u0435\u0440\u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",toggleFullscreen:"\u041F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",quote:"\u0426\u0438\u0442\u0430\u0442\u0430",left:"\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043E \u043B\u0456\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",center:"\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",right:"\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",justify:"\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0456",print:"\u0414\u0440\u0443\u043A",outdent:"\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0442\u0443\u043F",indent:"\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",removeFormat:"\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F",formatting:"\u0424\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F",fontSize:"\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",align:"\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",hr:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443 \u043B\u0456\u043D\u0456\u044E",undo:"\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",redo:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",heading1:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1",heading2:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2",heading3:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3",heading4:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4",heading5:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 5",heading6:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 6",paragraph:"\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444",code:"\u041A\u043E\u0434",size1:"\u0414\u0443\u0436\u0435 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",size2:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",size3:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439",size4:"\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439",size5:"\u0412\u0435\u043B\u0438\u043A\u0438\u0439",size6:"\u0414\u0443\u0436\u0435 \u0432\u0435\u043B\u0438\u043A\u0438\u0439",size7:"\u0412\u0435\u043B\u0438\u0447\u0435\u0437\u043D\u0438\u0439",defaultFont:"\u0428\u0440\u0438\u0444\u0442 \u0437\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C",viewSource:"\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0434\u0436\u0435\u0440\u0435\u043B\u043E"},tree:{noNodes:"\u041D\u0435\u043C\u0430\u0454 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0432\u0443\u0437\u043B\u0456\u0432",noResults:"\u0421\u043F\u0456\u0432\u043F\u0430\u0434\u0456\u043D\u044C \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E"}};export{i as default};
