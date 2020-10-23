const data = {
    "account": [{
        "accountId": "0000001",
        "name": "Elon Musk",
        "email": "testing_mail_robot@ukr.net",
        "password": "Qwe123!@#",
        "subscriptionType": "Standart",
        "timeZone": "UTC +02:00"
    }],
    "alerts": [{
        "alertMonitorId": "001",
        "contacts": {
            "email": {
                "contactId": "1233",
                "emailAdress": [
                    "qwerty@gmail.com"
                ]
            },
            "phone": [{
                "contactId": "1238",
                "type": "sms",
                "numbers": [
                    "+380987654321",
                    "+380987654322"
                ]
            }]
        }
    },
    {
        "alertMonitorId": [
            "002",
            "003"
        ],
        "contacts": {
            "email": {
                "contactId": "1233",
                "emailAdress": [
                    "qwerty@gmail.com",
                    "qwerty@ukr.net",
                    "qwerty@gmail.com"
                ]
            },
            "messengers": [{
                "contactId": "1234",
                "type": "slack",
                "id": "1215612654",
                "teamId": "56426426"
            },
            {
                "contactId": "1235",
                "type": "twitter",
                "id": [
                    "@AppleSupport",
                    "@Qwerty"
                ]
            },
            {
                "contactId": "1236",
                "type": "telegram",
                "id": [
                    "+380987654321",
                    "+380987654322"
                ]
            },
            {
                "contactId": "1237",
                "type": "viber",
                "id": [
                    "+380987654321",
                    "+380987654322"
                ]
            }
            ],
            "phone": [{
                "contactId": "1238",
                "type": "sms",
                "numbers": [
                    "+380987654321",
                    "+380987654322"
                ]
            },
            {
                "contactId": "1239",
                "type": "voice",
                "numbers": [
                    "+380987654321",
                    "+380987654322"
                ]
            }
            ]
        }
    }
    ],
    "monitors": [
        {
            "monitorType": "HTTP(S)",
            "monitorID": "001",
            "friendlyName": "dribble",
            "url(IP)": "http://dribble.com",
            "monitoringInterval": "5",
            "alertProperties": [{
                "status": "up",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236"
                ]
            },
            {
                "status": "down",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236",
                    "1238"
                ]
            }
            ],

        },
        {
            "monitorType": "ping",
            "monitorID": "002",
            "friendlyName": "Lanet",
            "url(IP)": "176.37.167.2",
            "monitoringInterval": "5",
            "alertProperties": [{
                "status": "up",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236"
                ]
            },
            {
                "status": "down",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236",
                    "1238"
                ]
            }
            ],

        },
        {
            "monitorType": "HTTP(S)",
            "monitorID": "003",
            "friendlyName": "Wiki",
            "url(IP)": "https://www.wikipedia.org/",
            "monitoringInterval": "5",
            "alertProperties": [{
                "status": "up",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236"
                ]
            },
            {
                "status": "down",
                "notification": true,
                "quantity": 1,
                "contactId": [
                    "1233",
                    "1236",
                    "1238"
                ]
            }
            ]

        }
    ],
    "logs": [{
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "0",
        "status": "start",
        "description": "started",
        "datetime": "1600683330"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "1",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683335"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "2",
        "status": "down",
        "description": "No Response(444)",
        "datetime": "1600683340"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "3",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683345"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "4",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683350"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "5",
        "status": "down",
        "description": "No Response(444)",
        "datetime": "1600683355"
    },
    {
        "monitorID": "001",
        "friendlyName": "dribble",
        "logId": "6",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683360"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "0",
        "status": "start",
        "description": "started",
        "datetime": "1600683330"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "1",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683335"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "2",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683340"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "3",
        "status": "down",
        "description": "No Response(444)",
        "datetime": "1600683345"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "4",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683350"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "5",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683355"
    },
    {
        "monitorID": "002",
        "friendlyName": "Lanet",
        "logId": "6",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683360"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "0",
        "status": "start",
        "description": "started",
        "datetime": "1600683330"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "1",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683335"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "2",
        "status": "down",
        "description": "No Response(444)",
        "datetime": "1600683340"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "3",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683345"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "4",
        "status": "down",
        "description": "No Response(444)",
        "datetime": "1600683350"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "5",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683355"
    },
    {
        "monitorID": "003",
        "friendlyName": "Wiki",
        "logId": "6",
        "status": "up",
        "description": "OK(200)",
        "datetime": "1600683360"
    },
    ],
    "alertLogs": [
        {
            "monitorId": "001",
            "logId": "4",
            "contactId": [
                "1233",
                "1236",
                "1238"
            ]
        },
        {
            "monitorId": "001",
            "logId": "5",
            "contactId": [
                "1233",
                "1236"
            ]
        },
        {
            "monitorId": "002",
            "logId": "8",
            "contactId": [
                "1233",
                "1236",
                "1238"
            ]
        }, {
            "monitorId": "002",
            "logId": "10",
            "contactId": [
                "1233",
                "1236"
            ]
        }, {
            "monitorId": "003",
            "logId": "7",
            "contactId": [
                "1233",
                "1236",
                "1238"
            ]
        }, {
            "monitorId": "003",
            "logId": "11",
            "contactId": [
                "1233",
                "1236"
            ]
        }
    ]
}
export default data;