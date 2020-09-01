{
    "targets": [
        {
            "target_name": "msfs-simconnect-nodejs",
            "sources": [ "src/addon.cc" ],
            "include_dirs": [
				"<!(node -e \"require('nan')\")",
				"./SimConnect SDK/include"
            ],
            "link_settings": {
                "libraries": [
                    "../SimConnect SDK/lib/SimConnect"
                ]
            }
        }
    ]
}
