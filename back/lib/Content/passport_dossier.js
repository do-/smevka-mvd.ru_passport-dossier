const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_passport_dossier:

    function () {

		return path.join (__dirname, '..', 'Static/guvm-passport-dossier-1.1.0.xsd')
    
    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_passport_dossier:

    function () {
/*
    	throw new Error (`
			<faultcode>SOAP-ENV:Server</faultcode>
			<faultstring xml:lang=\"en\">Очередь, в которую должно быть отправлено сообщение, переполнена.</faultstring>
			<detail><ns3:DestinationOverflow xmlns:ns3=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/faults/1.1\" xmlns:ns2=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/basic/1.1\" xmlns:ns4=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/1.1\"><ns2:Code>fed0:PRODUCTION_AREA:FED0_CORE2 : TR:SYNC:PP:15</ns2:Code><ns2:Description>SMEV-600:Очередь, в которую должно быть отправлено сообщение, переполнена.</ns2:Description><ns3:MessageBrokerAddress>unknown</ns3:MessageBrokerAddress><ns3:DestinationName>delivery.it_315626_MNSV14_3S._REQUEST_</ns3:DestinationName></ns3:DestinationOverflow></detail>
    	`)
*/
		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_passport_dossier:

    function () {
    
    	let {rq: {data}} = this

		return {
		  "passportDossierResponse": {
			"person": {
			  "lastName": "Смирнова",
			  "firstName": "Ирина",
			  "middleName": "Анатольевна",
			  "birthDate": "1980-03-05"
			},
			"passportDossier": [
			  {
				"person": {
				  "lastName": "Смирнова",
				  "firstName": "Ирина",
				  "middleName": "Анатольевна",
				  "gender": "F"
				},
				"passport": {
				  "series": "4020",
				  "number": "000006",
				  "issuerCode": "240-001",
				  "issuerName": "УФМС РОССИИ ПО КРАСНОЯРСКОМУ КРАЮ",
				  "issueDate": "2009-05-18",
				  "validDoc": null
				}
			  },
			  {
				"person": {
				  "lastName": "Смирнова",
				  "firstName": "Ирина",
				  "middleName": "Анатольевна",
				  "gender": "F"
				},
				"passport": {
				  "series": "4020",
				  "number": "000005",
				  "issuerCode": "240-001",
				  "issuerName": "УФМС РОССИИ ПО КРАСНОЯРСКОМУ КРАЮ",
				  "issueDate": "2000-06-09",
				  "invalidDoc": {
					"invalidityReason": "602",
					"invalidityDate": "2009-05-16"
				  }
				}
			  }
			]
		  }
		}

    },
        
}