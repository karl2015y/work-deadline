function s(e,t){return t[e%10===1&&e%100!==11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}const i={isoName:"ru",nativeName:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439",label:{clear:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C",ok:"OK",cancel:"\u041E\u0442\u043C\u0435\u043D\u0430",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",set:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",select:"\u0412\u044B\u0431\u0440\u0430\u0442\u044C",reset:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",remove:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",update:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",create:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C",search:"\u041F\u043E\u0438\u0441\u043A",filter:"\u0424\u0438\u043B\u044C\u0442\u0440",refresh:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",expand:e=>e?`\u0420\u0430\u0441\u0448\u0438\u0440\u044C\u0442\u0435 "${e}"`:"\u0420\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C",collapse:e=>e?`\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C "${e}"`:"\u041A\u0440\u0430\u0445"},date:{days:"\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0412\u0442\u043E\u0440\u043D\u0438\u043A_\u0421\u0440\u0435\u0434\u0430_\u0427\u0435\u0442\u0432\u0435\u0440\u0433_\u041F\u044F\u0442\u043D\u0438\u0446\u0430_\u0421\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),daysShort:"\u0412\u0441_\u041F\u043D_\u0412\u0442_\u0421\u0440_\u0427\u0442_\u041F\u0442_\u0421\u0431".split("_"),months:"\u042F\u043D\u0432\u0430\u0440\u044C_\u0424\u0435\u0432\u0440\u0430\u043B\u044C_\u041C\u0430\u0440\u0442_\u0410\u043F\u0440\u0435\u043B\u044C_\u041C\u0430\u0439_\u0418\u044E\u043D\u044C_\u0418\u044E\u043B\u044C_\u0410\u0432\u0433\u0443\u0441\u0442_\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u041E\u043A\u0442\u044F\u0431\u0440\u044C_\u041D\u043E\u044F\u0431\u0440\u044C_\u0414\u0435\u043A\u0430\u0431\u0440\u044C".split("_"),monthsShort:"\u042F\u043D\u0432_\u0424\u0435\u0432_\u041C\u0430\u0440_\u0410\u043F\u0440_\u041C\u0430\u0439_\u0418\u044E\u043D_\u0418\u044E\u043B_\u0410\u0432\u0433_\u0421\u0435\u043D_\u041E\u043A\u0442_\u041D\u043E\u044F_\u0414\u0435\u043A".split("_"),firstDayOfWeek:1,format24h:!0,pluralDay:"\u0434\u043D\u0435\u0439"},table:{noData:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",noResults:"\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...",selectedRecords:e=>e>0?e+" "+s(e,["\u0441\u0442\u0440\u043E\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u0430","\u0441\u0442\u0440\u043E\u043A\u0438 \u0432\u044B\u0431\u0440\u0430\u043D\u044B","\u0441\u0442\u0440\u043E\u043A \u0432\u044B\u0431\u0440\u0430\u043D\u043E"])+".":"\u041D\u0438 \u043E\u0434\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0430 \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u0430.",recordsPerPage:"\u0421\u0442\u0440\u043E\u043A \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:",allRows:"\u0412\u0441\u0435",pagination:(e,t,r)=>e+"-"+t+" \u0438\u0437 "+r,columns:"\u041A\u043E\u043B\u043E\u043D\u043A\u0438"},editor:{url:"URL",bold:"\u041F\u043E\u043B\u0443\u0436\u0438\u0440\u043D\u044B\u0439",italic:"\u041A\u0443\u0440\u0441\u0438\u0432",strikethrough:"\u0417\u0430\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",underline:"\u041F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",unorderedList:"\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",orderedList:"\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",subscript:"\u041F\u043E\u0434\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439",superscript:"\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0447\u043D\u044B\u0439",hyperlink:"\u0413\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043A\u0430",toggleFullscreen:"\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",quote:"\u0426\u0438\u0442\u0430\u0442\u0430",left:"\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",center:"\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",right:"\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",justify:"\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435",print:"\u041F\u0435\u0447\u0430\u0442\u044C",outdent:"\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",indent:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",removeFormat:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",formatting:"\u0424\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",fontSize:"\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",align:"\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",hr:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E",undo:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",redo:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",heading1:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1",heading2:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2",heading3:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3",heading4:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4",heading5:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 5",heading6:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 6",paragraph:"\u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444",code:"\u041A\u043E\u0434",size1:"\u041E\u0447\u0435\u043D\u044C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",size2:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",size3:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439",size4:"\u0421\u0440\u0435\u0434\u043D\u0438\u0439",size5:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439",size6:"\u041E\u0447\u0435\u043D\u044C \u0431\u043E\u043B\u044C\u0448\u043E\u0439",size7:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439",defaultFont:"\u0428\u0440\u0438\u0444\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",viewSource:"\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434"},tree:{noNodes:"\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0443\u0437\u043B\u043E\u0432",noResults:"\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"}};export{i as default};
