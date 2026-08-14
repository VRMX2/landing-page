// GOOGLE APPS SCRIPT - انسخ هذا الكود في محرر Google Apps Script
// الطريقة: GET request مع URL parameters (الأضمن مع CORS)

function doGet(e) {
  try {
    var params = e.parameter;
    
    // Open the sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Commandes");
    
    if (!sheet) {
      // Create sheet if it doesn't exist
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Commandes");
    }
    
    // --- READ ORDERS (For Dashboard) ---
    if (params.action === 'getOrders') {
      var data = sheet.getDataRange().getValues();
      var orders = [];
      
      if (data.length > 1) {
        var headers = data[0];
        for(var i = 1; i < data.length; i++) {
          var row = data[i];
          if (!row[0]) continue;
          
          var order = {
            id: i,
            timestamp: row[0],
            package: row[1],
            fullName: row[2],
            phone: row[3],
            willaya: row[4],
            baladiya: row[5],
            deliveryMethod: row[6],
            totalPrice: row[7]
          };
          orders.push(order);
        }
        orders.reverse(); // Newest first
      }
      
      return ContentService
        .createTextOutput(JSON.stringify({"result": "success", "orders": orders}))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // --- INSERT NEW ORDER (From Landing Page) ---
    // Add headers if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["التاريخ", "العرض", "الاسم واللقب", "الهاتف", "الولاية", "البلدية", "التوصيل", "السعر الإجمالي"]);
      sheet.getRange("A1:H1").setFontWeight("bold");
      sheet.getRange("A1:H1").setBackground("#D4AF37");
    }
    
    // Add the order row
    sheet.appendRow([
      params.timestamp || new Date().toISOString(),
      params.package || "",
      params.fullName || "",
      params.phone || "",
      params.willaya || "",
      params.baladiya || "",
      params.deliveryMethod || "",
      params.totalPrice || ""
    ]);
    
    // Return success with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Keep doPost as fallback
function doPost(e) {
  try {
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch(ex) {
      data = e.parameter;
    }
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Commandes");
    
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Commandes");
    }
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["التاريخ", "العرض", "الاسم واللقب", "الهاتف", "الولاية", "البلدية", "التوصيل", "السعر الإجمالي"]);
      sheet.getRange("A1:H1").setFontWeight("bold");
    }
    
    sheet.appendRow([
      data.timestamp,
      data.package,
      data.fullName,
      data.phone,
      data.willaya,
      data.baladiya,
      data.deliveryMethod,
      data.totalPrice
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({"result": "error", "error": error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
