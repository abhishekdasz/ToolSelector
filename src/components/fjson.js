const tabcontent = [
    {
        "agent_id": 4,
        "task_id": "a44af46d-6551-421e-8b03-4a2ac54faf60",
        "agent_name": "jile_graph_v1",
        "response_type": "HITL",
        "agent_state": {
            "state_var1": "state value",
            "state_var2": "state value",
            "state_var3": "state value"
        },
        "human_review": {
            "review_state": [
                "state_var1",
                "state_var2"
            ],
            "form_data": {
                "form_content": [
                    {
                        "form_type": "TEXT_BOX",
                        "lable_name": "Lable1",
                        "text_box_name": "text1",
                        "text_box_val": "state_var1"
                    },
                    {
                        "form_type": "TEXT_BOX",
                        "lable_name": "Lable1",
                        "text_box_name": "text2",
                        "text_box_val": "state_var2"
                    },
                    {
                        "form_type": "CHECK_BOX",
                        "lable_name": "Lable1",
                        "checked": "true"
                    },
                    {
                        "form_type": "TEXT_AREA",
                        "lable_name": "Lable1",
                        "text_box_name": "text2",
                        "text_box_val": "state_var2"
                    },
                    {
                        "form_type": "TEXT_AREA",
                        "lable_name": "Lable2",
                        "text_box_name": "text2",
                        "text_box_val": "state_var2"
                    },
                    {
                        "form_type": "CHECK_BOX",
                        "lable_name": "Lable1",
                        "checked": "true"
                    },
                    {
                        "form_type": "TEXT_AREA",
                        "lable_name": "Lable3",
                        "text_box_name": "text2",
                        "text_box_val": "state_var2"
                    },
                    {
                        "form_type": "TEXT_BOX",
                        "lable_name": "Lable1",
                        "text_box_name": "text2",
                        "text_box_val": "state_var2"
                    },
                ]
            },
            "action_dtls": {
                "action_list": [
                    "Approve",
                    "Reject"
                ],
                "UserMsg": "please approve the output"
            }
        }
    }
]
 
export default tabcontent;