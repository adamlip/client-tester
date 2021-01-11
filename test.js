var pug = require('pug')
var fs = require('fs')
let puggy = pug.compileFile("./order_supervisor.pug")

let order = {
    "uuid": "11EB51C97679EB3097F415590907F81B",
    "orderNumber": "122",
    "orderIdentifier": "Laci",
    "insertUserUUID": "11EB362AA8E52D10A5E7231CAA3D371C",
    "notes": "Teszt",
    "currency": "huf",
    "locationUUID": "B380A9BDC7504219904C4E8DD1984C38",
    "sourceType": 2,
    "languageCode": "hu",
    "insertDeviceUUID": "",
    "insertDeviceType": 1000,
    "invoiceNeeded": 1,
    "invoiceInfo": {
        "tax": "",
        "zip": "1138",
        "city": "Budapest, XIII.",
        "name": "Laci",
        "floor": "1",
        "state": "Pest",
        "street": "Utca",
        "taxType": "NO_TAX_NUMBER",
        "countryCode": "HU",
        "streetNumber": "1"
    },
    "deliveryInfo": {
        "zip": "1121",
        "city": "Budapest, XII.",
        "name": "Laci",
        "floor": "1",
        "state": "Pest",
        "street": "Utca",
        "telNumber": "12345",
        "countryCode": "HU",
        "streetNumber": "1"
    },
    "deliveryType": "atStore",
    "deliveryCost": "0",
    "paymentType": "Offline",
    "requestedReadyTime": null,
    "takeAway": 0,
    "tableUUID": "",
    "groupUUID": {
        "type": "Buffer",
        "data": []
    },
    "vipID": null,
    "useVipPoints": null,
    "useCouponCode": null,
    "price": null,
    "insertTimestamp": "2021-01-08T15:53:27.000Z",
    "payments": [],
    "statuses": [
        {
            "uuid": "11EB51C9A5916E20B7841B4D23729369",
            "statusID": 100,
            "notes": "",
            "sourceType": 2,
            "insertUserUUID": "11EB362AA8E52D10A5E7231CAA3D371C",
            "insertTimestamp": "2021-01-08T15:53:27.000Z"
        }
    ],
    "items": [
        {
            "orderItemUUID": "11EB51C97679EB3197F415590907F81B",
            "count": 1,
            "price": "10439.00",
            "vat": "27.00",
            "itemUUID": "11EB3FBCCE22A2B0B3FF8D92DE2515E9",
            "categoryUUID": "",
            "takeAway": 0,
            "selectedSizeUUID": "11EB3FBA75369370B3FF8D92DE2515E9",
            "notes": "",
            "totalPrice": 10439,
            "discountPrice": 10439,
            "modifiers": [],
            "totalPriceUnit": 10439,
            "discountAmount": 0,
            "itemDiscounts": [],
            "itemVipDiscounts": [
                0
            ],
            "selectedItemSize": {
                "uuid": "11EB3FBCCE2B0720B3FF8D92DE2515E9",
                "id": 3183
            },
            "name": {
                "hu": "FEHÉRBOR VÁLOGATÁS 2020 6X0,75L"
            },
            "sizeExtID": "0",
            "sizeName": {
                "hu": "db"
            },
            "extID": "rkr_103168"
        },
        {
            "orderItemUUID": "11EB51C98091626097F415590907F81B",
            "count": 1,
            "price": "847.00",
            "vat": "5.00",
            "itemUUID": "11EB3FBCCFF45570B3FF8D92DE2515E9",
            "categoryUUID": "11EB4562F4A4E1908C00479E465377A4",
            "takeAway": 0,
            "selectedSizeUUID": "11EB3FBA75369370B3FF8D92DE2515E9",
            "notes": "",
            "totalPrice": 847,
            "discountPrice": 847,
            "modifiers": [],
            "totalPriceUnit": 847,
            "discountAmount": 0,
            "itemDiscounts": [],
            "itemVipDiscounts": [
                0
            ],
            "selectedItemSize": {
                "uuid": "11EB3FBCCFFCE0F0B3FF8D92DE2515E9",
                "id": 3193
            },
            "name": {
                "hu": "Heppenheimer tyúktojás szabadtartású"
            },
            "sizeExtID": "0",
            "sizeName": {
                "hu": "db"
            },
            "extID": "supp_10002"
        },
        {
            "orderItemUUID": "11EB51C98F81D8E097F415590907F81B",
            "count": 24,
            "price": "65.00",
            "vat": "27.00",
            "itemUUID": "11EB3FBAA3492980B3FF8D92DE2515E9",
            "categoryUUID": "11EB3FBA8A6146F0B3FF8D92DE2515E9",
            "takeAway": 0,
            "selectedSizeUUID": "11EB3FBA78453300B3FF8D92DE2515E9",
            "notes": "",
            "totalPrice": 1560,
            "discountPrice": 1560,
            "modifiers": [],
            "totalPriceUnit": 65,
            "discountAmount": 0,
            "itemDiscounts": [],
            "itemVipDiscounts": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            "selectedItemSize": {
                "uuid": "11EB3FBAA35166E0B3FF8D92DE2515E9",
                "id": 240
            },
            "name": {
                "hu": "AVE ásványvíz mentes"
            },
            "sizeExtID": "0",
            "sizeName": {
                "hu": "0,5l"
            },
            "extID": "rkr_100225"
        }
    ],
    "invoices": [],
    "totalPrice": 12846,
    "discountPrice": 12846,
    "paymentsTotal": 0,
    "paymentsNeeded": 12846,
    "updateTimestamp": null,
    "vatAmounts": {
        "27.00": 11999,
        "5.00": 847
    },
    "vipDiscounts": {},
    "discountAmount": 0
}

let data = puggy({order})
console.log(data)

fs.writeFile('test.html', data, function (err) {
    if (err) return console.log(err);
  });