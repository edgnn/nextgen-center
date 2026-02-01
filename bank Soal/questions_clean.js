                {
                    id: 11,
                    type: "multiple-choice",
                    image: "images/page5_img1.jpeg",
                    text: "Refer to the exhibit. The AP status from Cisco DNA Center Assurance Dashboard shows some physical connectivity issues from access switch interface 61/0/14. Which command generates the diagnostic data to resolve the physical connectivity issues?",
                    options: [
                        { letter: "A", text: "check cable-diagnostics tdr interface GigabitEthernet1/0/14" },
                        { letter: "B", text: "show cable-diagnostics tdr interface GigabitEthernet1/014" },
                        { letter: "C", text: "test cable-diagnostics tdr interface GigabitEthernet1/0/14" },
                        { letter: "D", text: "verify cable-diagnostics tdr interface GigabitEthernet1/0/14" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 12,
                    type: "multiple-choice",
                    image: "images/page6_img1.jpeg",
                    text: "Refer to the exhibit. R1 and R2 use lGP protocol to route traffic between AS 100 and AS 200 despite being configured to use BGP. Which action resolves the issue and ensures the use of BGP?",
                    options: [
                        { letter: "A", text: "Remove distance commands under BGP AS 100 and AS 200." },
                        { letter: "B", text: "Configure distance to 100 under the OSPF process of R1 and R2." },
                        { letter: "C", text: "Remove distance commands under BGP AS 100." },
                        { letter: "D", text: "Configure distance to 100 under the EIGRP process of R1 and R2." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 13,
                    type: "multiple-choice",
                    image: "images/page6_img1.jpeg",
                    text: "Refer to the exhibit. The IT manager received reports from users about slow applications through network x. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Use the variance 2 command to enable load balancing." },
                        { letter: "B", text: "Increase the bandwidth from the service provider." },
                        { letter: "C", text: "Move the servers into the users subnet." },
                        { letter: "D", text: "Upgrade the IOS on router E." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 14,
                    type: "multiple-choice",
                    image: "images/page7_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 15,
                    type: "multiple-choice",
                    image: "images/page8_img1.jpeg",
                    text: "Refer to the exhibit. UserPC receives the IP address but does not register to the call manager. Which command in ip dhcp pool VLAN200_USER_VOICE resolves the issue?",
                    options: [
                        { letter: "A", text: "option 150 ip 10.221.10.10" },
                        { letter: "B", text: "option 160 ip 10.221.10.10" },
                        { letter: "C", text: "option 117 ip 10.221.10.10" },
                        { letter: "D", text: "option 15 ip 10.221.10.10" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 16,
                    type: "multiple-choice",
                    image: "images/page9_img1.jpeg",
                    text: "Refer to the exhibit. Router R2 VLAN 10 users cannot get dynamic IP addresses from R1. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the IP helper feature on the Interface GigabitEthernet 0/2 of router R2." },
                        { letter: "B", text: "Eliminate the port security feature on the portsof switch SW2." },
                        { letter: "C", text: "Expand the address scope of VLAN 10." },
                        { letter: "D", text: "Identify the host with the duplicate IP address." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 17,
                    type: "multiple-choice",
                    image: "images/page9_img1.jpeg",
                    text: "Refer to the exhibit. The administrator noticed that the connection was flapping between the two ISPs instead of switching to ISP2 when the ISPI failed. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Include a valid source.interface keyword in the icmp-echo statement." },
                        { letter: "B", text: "Modify the static routes to refer both to the next hop and the outgoing interface." },
                        { letter: "C", text: "Modify the threshold to match the administrative distance of the ISP2 route." },
                        { letter: "D", text: "Reference the track object 1 on the default route through ISP2 instead of ISP1." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 18,
                    type: "multiple-choice",
                    image: "images/page10_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator has developed a Python script on the local Linux machine and is trying to transfer it to the router. However, the transfer fails. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "The Python interpreter must first be enabled with the guestshell enable command." },
                        { letter: "B", text: "The SCP service must be enabled with the ip scp server enable command." },
                        { letter: "C", text: "The SSH service must be enabled with the crypto key generate rsa command." },
                        { letter: "D", text: "The SSH access must be allowed on the VTY lines using the transport input ssh command." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 19,
                    type: "multiple-choice",
                    image: "images/page10_img1.jpeg",
                    text: "Refer to the exhibit. The output of the trace route from R5 shows a loop in the network. Which configuration prevents this loop?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 20,
                    type: "multiple-choice",
                    image: "images/page11_img1.jpeg",
                    text: "Refer to the exhibits. An engineer identified a Layer 2 loop using DNAC. Which command fixes the problem in the SF-D9300-1 switch?",
                    options: [
                        { letter: "A", text: "spanning-tree backbonefast" },
                        { letter: "B", text: "spanning-tree portfast bpduguard" },
                        { letter: "C", text: "no spanning-tree uplinkfast" },
                        { letter: "D", text: "spanning-tree loopguard default" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 21,
                    type: "multiple-choice",
                    image: "images/page12_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured NetFlow on R1, but the NMS server cannot see the flow from R1. Which configuration resolver the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 22,
                    type: "multiple-choice",
                    text: "What is a MPLS PHP label operation?",
                    options: [
                        { letter: "A", text: "It improves P router performance by not performing multiple label Iookup." },
                        { letter: "B", text: "It uses implicit-NULL for traffic congestion from source to destination forwarding." },
                        { letter: "C", text: "PE removes the outer label before sending to the P router." },
                        { letter: "D", text: "Downstream node signals to remove the label." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 23,
                    type: "multiple-choice",
                    text: "CoPP failed to capture the desired traffic and the CPU load is getting higher. Which two configurations resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 24,
                    type: "multiple-choice",
                    image: "images/page13_img1.jpeg",
                    text: "Refer to the exhibit. ElGRP peering was lost. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 25,
                    type: "multiple-choice",
                    image: "images/page14_img1.jpeg",
                    text: "Refer to the exhibit. R1 is being monitored using SNMP and monitoring devices are getting only partial information. What action should be taken to resolve this issue?",
                    options: [
                        { letter: "A", text: "Modify the CoPP policy to increase the configured CIR limit for SNMP." },
                        { letter: "B", text: "Modify the access list to include snmptrap." },
                        { letter: "C", text: "Modify the CoPP policy to increase the configured exceeded limit for SNMP." },
                        { letter: "D", text: "Modify the access list to addva second line to allow udp any any eq snmp." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 26,
                    type: "multiple-choice",
                    image: "images/page14_img1.jpeg",
                    text: "Refer to the exhibit ElGRP adiacency between routerA and router C is not working as expected. Which two configurations resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 27,
                    type: "multiple-choice",
                    image: "images/page15_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configures router A to mark all inside to outside traffic from network 192.168.1.0, except from host 192.168.1.1, with critical lP precedence. The policy did not work as expected. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 28,
                    type: "multiple-choice",
                    text: "Which two label distribution methods are used by routers in MPLS? (Choose two.)",
                    options: [
                        { letter: "A", text: "targeted hello message" },
                        { letter: "B", text: "downstream on demand" },
                        { letter: "C", text: "downstream unsolicited" },
                        { letter: "D", text: "LDP discovery hello message" },
                        { letter: "E", text: "LDP session protection message" },
                    ],
                    correct: ["B", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 29,
                    type: "multiple-choice",
                    image: "images/page16_img1.jpeg",
                    text: "Refer to the exhibit. An OSPF neighbor relationship between R2 and R3 is showing stuck in EXCHANGE/EXSTART state- The neighbor is established between R1 and R2. The network engineer can ping from R2 to R3 and vice versa, but the neighbor is still down. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Administrative \"shut then no shut\" both router interfaces." },
                        { letter: "B", text: "Restore the Layer 2/Layer 3 connectivity issue in the ISP network" },
                        { letter: "C", text: "Match MTU on both router interfaces or ignore MTU." },
                        { letter: "D", text: "Enable OSPF on the interface, which is required." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 30,
                    type: "multiple-choice",
                    text: "How are MPLS Layer 3 VPN services deployed?",
                    options: [
                        { letter: "A", text: "The import and export RT values under a VRF must always be the same" },
                        { letter: "B", text: "The RD and RT values must match under the VRF." },
                        { letter: "C", text: "The RD and RT values under a VRF must match on the remote PE router" },
                        { letter: "D", text: "The label switch path must be available between the local and remote PE routers" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 31,
                    type: "multiple-choice",
                    text: "An engineer configured the wrong default gateway for the Cisco DNA Center enterprise interface during the instal Which command must the engineer run to correct the configuration?",
                    options: [
                        { letter: "A", text: "sudo maglev install config update" },
                        { letter: "B", text: "sudo update config install" },
                        { letter: "C", text: "sudo maglev-config update" },
                        { letter: "D", text: "sudo maglev reinstall" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 32,
                    type: "multiple-choice",
                    text: "What are two purposes of using IPv4 and VPNv4 address-family configurations in a Layer 3 MPLS VPN? (Choose two.)",
                    options: [
                        { letter: "A", text: "RD is prepended to the IPv4 route to make it unique." },
                        { letter: "B", text: "The IPv4 address is needed to tag the MPLS label." },
                        { letter: "C", text: "The VPNv4 address consists of a 64-bit route dietinguisher that is prepended to the IPv4 prefix." },
                        { letter: "D", text: "MP-BGP is used to allow overlapping IPv4 addresses between customers to advertise through the network." },
                        { letter: "E", text: "The VPNv4 address is used to advertise the MPLS VPN label." },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 33,
                    type: "multiple-choice",
                    text: "A network administrator is troubleshooting a high utilization issue on the route processor of a router that was reported by NMS. The administrator logged into the router to check the control plane policing and observed that the BGP process is dropping a high number of routing packets and causing thousands of routes to recalculate frequently. Which solution resolves this issue?",
                    options: [
                        { letter: "A", text: "Police the cir for BGP, conform-action transmit, and exceed action transmit" },
                        { letter: "B", text: "Shape the pir for BGP, conform-action set-prec-transmit, and exceed action set-frde-transmit." },
                        { letter: "C", text: "Police the pir for BGP, conform-action set-prec-transmit, and exceed action set-clp-transmit." },
                        { letter: "D", text: "Shape the cir for BGP, conform-action transmit, and exceed action transmit" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 34,
                    type: "multiple-choice",
                    image: "images/page18_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must troubleshoot a connectivity issue impacting the redistribution of the subnet 172.16.2.48/28 into the OSPF domain. Which configuration on router R1 advertises this subnet into the OSPF domain?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 35,
                    type: "multiple-choice",
                    image: "images/page19_img1.jpeg",
                    text: "Refer to the exhibit. The Los Angeles and New York routers are receiving routes from Chicago but not from each other. Which configuration fixes the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 36,
                    type: "multiple-choice",
                    image: "images/page19_img1.jpeg",
                    text: "Refer to the exhibit. A shoe retail company implemented the uRPF solution for an antispoofing attack. A network engineer received the call that the branch A server is under an IP spoofing attack. Which configuration must be implemented to resolve the attack?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 37,
                    type: "multiple-choice",
                    image: "images/page20_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator is discovering a Cisco Catalyst 9300 and a Cisco WLC 3504 in Cisco ONA Center. The Catalyst 9300 is added successfully. However, the WLC is showing error \"uncontactable\" when the administrator tries to add it in Cisco DNA Center. Which action discovers WLC in Cisco DNA Center successfully?",
                    options: [
                        { letter: "A", text: "Copy the .pem file from the Cisco DNA Center on the USB and upload to the WLC 3504." },
                        { letter: "B", text: "Add the WLC 3504 under the hierarchy of the Catalyst 9300 connected devices." },
                        { letter: "C", text: "Delete the WLC 3504 from Cisco DNA Center and add it to Cisco DNA Center again." },
                        { letter: "D", text: "Copy the .cert file from the Cisco DNA Center on the USB and upload it to the WLC 3504." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 38,
                    type: "multiple-choice",
                    text: "Which list defines the contents of an MPLS label?",
                    options: [
                        { letter: "A", text: "20-bit label; 3-bit flow label; 1-bit bottom stack, 8-bit hop limit" },
                        { letter: "B", text: "32-bit label; 3-bit flow label; 1-bit bottom stack, 8-bit hop limit" },
                        { letter: "C", text: "32-bit label; 3-bit traffic class; 1-bit bottom staclc 8-bit TTL" },
                        { letter: "D", text: "20-bit label; 3-bit traffic class; 1-bit bottom stack, 8-bit TTL" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 39,
                    type: "multiple-choice",
                    text: "The network administrator is not getting the desired result for the SNMP traffic and SNMP traffic is getting dropped frequently. Which set of configurations resolves the issue? .",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 40,
                    type: "multiple-choice",
                    text: "What are two functions of MPLS Layer 3 VPNs? (Choose two.)",
                    options: [
                        { letter: "A", text: "A packet with node segment ID is forwarded along with shortest path to destination." },
                        { letter: "B", text: "Customer traffic is encapSulated in a VPN label when it is forwarded in MPLS network." },
                        { letter: "C", text: "LDP and BGP can be used for Pseudowire signaling." },
                        { letter: "D", text: "BGP is used for signaling customer VPNv4 routes between PE nodes." },
                        { letter: "E", text: "It is used for transparent point-tdmultipoint connectivity between Ethernet links/sites." },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 41,
                    type: "multiple-choice",
                    text: "Which MPLS value is combined with the IP prefix to convert to a VPNv4 prefix?",
                    options: [
                        { letter: "A", text: "16-byte Route Distinguisher" },
                        { letter: "B", text: "8-byte Route Target" },
                        { letter: "C", text: "16-byte Route Target" },
                        { letter: "D", text: "8-byte Route Distinguisher" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 42,
                    type: "multiple-choice",
                    text: "What is a role of route distinguishers in an MPLS network?",
                    options: [
                        { letter: "A", text: "Route distinguishers define which prefixes are imported and exported on the edge router." },
                        { letter: "B", text: "Route distinguishers allow multiple instances of a routing table to coexist within the edge router." },
                        { letter: "C", text: "Route distinguishers make a unique VPNv4 address across the MPLS network." },
                        { letter: "D", text: "Route distinguishers are used for label bindings." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 43,
                    type: "multiple-choice",
                    text: "What is the role of LDP in MPLS networks?",
                    options: [
                        { letter: "A", text: "It disables label binding information to exchange with peer LSRs." },
                        { letter: "B", text: "It creates MPLS packet forwarding along with the IGP routes." },
                        { letter: "C", text: "It enables label binding information to exchange with peer LSRs." },
                        { letter: "D", text: "It enables label binding that exchanges route descriptors." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 44,
                    type: "multiple-choice",
                    image: "images/page22_img1.jpeg",
                    text: "Refer to the exhibit. Which action resolves the failed authentication attempt to the router?",
                    options: [
                        { letter: "A", text: "Configure aaa authorization login command on line vty 0 4." },
                        { letter: "B", text: "Configure aaa authorization login command on line console 0." },
                        { letter: "C", text: "Configure aaa authorization console command on line vty 0 4." },
                        { letter: "D", text: "Configure aaa authorization console global command." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 45,
                    type: "multiple-choice",
                    text: "In which two ways does the IPv6 First-Hop Security Binding Table operate? (Choose two.)",
                    options: [
                        { letter: "A", text: "by IPv6 routing protocols to securely build neighborships without the need of authentication" },
                        { letter: "B", text: "by IPv6 HSRP to make sure neighbors are authenticated before being used as gateways" },
                        { letter: "C", text: "by the recovery mechanism to recover the binding table in the event of a device reboot" },
                        { letter: "D", text: "by storing hashed keys for lPsec tunnels for the built-in lPsec features" },
                        { letter: "E", text: "by various IPv6 guard features to validate the data link layer address" },
                    ],
                    correct: ["C", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 46,
                    type: "multiple-choice",
                    text: "Which Layer 3 VPN attribute allows different customers to connect to the same MPLS network with overlapping lP ranges?",
                    options: [
                        { letter: "A", text: "MP-BGP" },
                        { letter: "B", text: "RT" },
                        { letter: "C", text: "RD" },
                        { letter: "D", text: "VRF" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 47,
                    type: "multiple-choice",
                    image: "images/page23_img1.jpeg",
                    text: "Refer to the exhibit. BGP is flapping after the CoPP policy is applied. What are two solutions to fix the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "Configure IP CEF for CoPP policy and BGP to work." },
                        { letter: "B", text: "Configure a higher value for CIR under the default class to allow more packets during peak traffic." },
                        { letter: "C", text: "Configure a higher value for CIR under the Class COPR-CRITICAL-7600." },
                        { letter: "D", text: "Configure a three-color policer instead of two-color policer under Class COPP-CRITCAL-7600." },
                        { letter: "E", text: "Configure BGP in the COPP-CRTTICAL-7600 ACL." },
                    ],
                    correct: ["B", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 48,
                    type: "multiple-choice",
                    image: "images/page23_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must advertise LAN network 192.168.1.0 of router A to router B through OSPF. The engineer notices that router B was configured, but the LAN network of router A is not in the routing table of router B. Which configuration on routerA resolves the problem?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 49,
                    type: "multiple-choice",
                    text: "Which function does LDP provide in an MPLS topology?",
                    options: [
                        { letter: "A", text: "It enables a MPLS topology to connect multiple VPNs to P routers." },
                        { letter: "B", text: "It provides a means for LSRs to exchange IP routes." },
                        { letter: "C", text: "It provides hop-by-hop forwarding in an MPLS topology for LSRs." },
                        { letter: "D", text: "It exchanges routes for MPLS VPNs across different VRFs." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 50,
                    type: "multiple-choice",
                    image: "images/page25_img1.jpeg",
                    text: "Refer to the exhibit. Reachability between servers in a network deployed with DHCPv6 is unstable. Which command must be removed from the configuration to make DHCPv6 function?",
                    options: [
                        { letter: "A", text: "ipv6 address 2001:0:1:4::1/64" },
                        { letter: "B", text: "address prefix 2001:0:1:4:/64 lifetime infinite infinite" },
                        { letter: "C", text: "ipv6 dhcp server DHCPPOOL" },
                        { letter: "D", text: "ipv6 nd ra suppress" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 51,
                    type: "multiple-choice",
                    image: "images/page25_img1.jpeg",
                    text: "Refer to the exhibit. Users in the branch network of 2001:db8:0:4::/64 report that they cannot access the internet. Which command is issued in IPv6 router EIGRP 100 configuration mode to solve this issue?",
                    options: [
                        { letter: "A", text: "Issue the no eigrp stub command on R2." },
                        { letter: "B", text: "Issue the no eigrp stub command on R1." },
                        { letter: "C", text: "Issue the eigrp stub command on R1." },
                        { letter: "D", text: "Issue the eigrp stub command on R2." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 52,
                    type: "multiple-choice",
                    image: "images/page26_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured lP SLA to monitor a next hop on a router for reachabillty. When the next hopis unreachable, the router is executing tracking and falling over another route, but packet loss is experienced because the reachabillty is flapping. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Increase the frequency of the sla probe to 60." },
                        { letter: "B", text: "Append delay up 0 down 0 to the track command." },
                        { letter: "C", text: "Increase the timeout of the sla probe to 6000." },
                        { letter: "D", text: "Append delay up 60 down 60 to the track command." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 53,
                    type: "multiple-choice",
                    image: "images/page26_img1.jpeg",
                    text: "Refer to the exhibit. An administrator must upload the packages.conf file to an FTP server. However, the FTP server rejected anonymous service and required users to authenticate. What are the two ways to resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 54,
                    type: "multiple-choice",
                    image: "images/page27_img1.jpeg",
                    text: "\\ Refer to the exhibit. An engineer is troubleshooting a routing loop on the network to reach the 172.16.3.0/16 from the OSPF domain. Which configuration on router R1 resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 55,
                    type: "multiple-choice",
                    text: "When provisioning a device in Cisco DNA Center, the engineer sees the error message \"Cannot select the device. Not compatible with template\". What is the reason for the error?",
                    options: [
                        { letter: "A", text: "The tag that was used to filter the templates does not match the device tag." },
                        { letter: "B", text: "The changes to the template were not committed." },
                        { letter: "C", text: "The template has an incorrect configuration." },
                        { letter: "D", text: "The software version of the template is different from the software version of the device." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 56,
                    type: "multiple-choice",
                    text: "An engineer failed to run diagnostic commands on devices using Cisco DNA Center. Which action in Cisco DNA Center resolves the issue?",
                    options: [
                        { letter: "A", text: "Enable APls." },
                        { letter: "B", text: "Enable CDP." },
                        { letter: "C", text: "Enable Command Runner." },
                        { letter: "D", text: "Enable Secure Shell." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 57,
                    type: "multiple-choice",
                    image: "images/page28_img1.jpeg",
                    text: "Refer to the exhibit. Site 1 must perform unequal cost load balancing toward the segments behind Site2 and Site3. Some of the routes are getting load balanced but others are not. Which configuration allows Site 1 to load balance toward all the LAN segments of the remote routers?",
                    options: [
                        { letter: "A", text: "Site2 router eigrp 100 variance 3" },
                        { letter: "B", text: "Site1 router eigrp 100 variance 3" },
                        { letter: "C", text: "Site2 router eigrp 100 variance 2" },
                        { letter: "D", text: "Site3 router eigrp 100 variance 2" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 58,
                    type: "multiple-choice",
                    image: "images/page29_img1.jpeg",
                    text: "Refer to the exhibit. Routers R1 and R2 exchange routes to each other’s loopback through oSPF. Telnet traffic must be blocked from R2 Lo0 to R1 Lo2 Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 59,
                    type: "multiple-choice",
                    image: "images/page31_img1.jpeg",
                    text: "Refer to the exhibit. An engineer has successfully set up a floating static route from the BRANCH router to the HQ network using HQ_R1 as the primary default gateway. When the g0/0 goes down on HQ_R1, the branch network cannot reach the HQ network 192.168.20.0/24. Which set of configurations resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 60,
                    type: "multiple-choice",
                    text: "Which component of MPLS VPNs is used to extend the IP address so that an engineer is able to identify to which VPN it belongs?",
                    options: [
                        { letter: "A", text: "LDP" },
                        { letter: "B", text: "RT" },
                        { letter: "C", text: "VPNv4 address family" },
                        { letter: "D", text: "RD" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 61,
                    type: "multiple-choice",
                    image: "images/page32_img1.jpeg",
                    text: "Refer to the exhibit. A company is evaluating multiple network management system tools. Trending graphs generated by SNMP data are returned by the NMS and appear to have multiple gaps. While troubleshooting the issue, an engineer noticed the relevant output What solves the gaps in the graphs?",
                    options: [
                        { letter: "A", text: "Separate the NMS class map in multiple class maps based on the specific protocols with appropriate CoPP actions." },
                        { letter: "B", text: "Configure the CIR rate to a lower value that accommodates all the NMS tools." },
                        { letter: "C", text: "Remove the Class map NMS from being part of control plane policing." },
                        { letter: "D", text: "Remove the exceed-rate command in the class map." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 62,
                    type: "multiple-choice",
                    text: "Which control plane process allows the MPLS forwarding state to recover when a secondary RP takes over from a failed primary RP?",
                    options: [
                        { letter: "A", text: "FEC uses a control plane service to distribute information between primary and secondary processors." },
                        { letter: "B", text: "MP-BGP uses control plane services for label prefixbindings in the MPLS forwarding table." },
                        { letter: "C", text: "LDP uses SSO to recover from disruption in control plane service." },
                        { letter: "D", text: "LSP uses NSF to recover from disruption in control plane service." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 63,
                    type: "multiple-choice",
                    image: "images/page33_img1.jpeg",
                    text: "Refer to the exhibit. An engineer receives this error message when trying to access another router in-band from the serial interface connected to the console of R1.Which configuration is needed on R1 to resolve this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 64,
                    type: "multiple-choice",
                    image: "images/page34_img1.jpeg",
                    text: "Refer to the exhibit. The engineer configured route redistribution in the network but soon received reports that R2 cannot access 192.168.7.0/24 and 192.168.15.0/24 subnets. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 65,
                    type: "multiple-choice",
                    text: "No traffic is filtering through CoPP, which is resulting in high CPU utilization. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 66,
                    type: "multiple-choice",
                    image: "images/page35_img1.jpeg",
                    text: "Refer to the exhibit. A CoPP policy is implemented to allow specific control traffic, but the traffic is not matching as expected and is getting unexpected behavior of control traffic. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Use default-class to match ICMP traffic." },
                        { letter: "B", text: "Use match-any instruction in class-map." },
                        { letter: "C", text: "Create a separate class map against each ACL." },
                        { letter: "D", text: "Create a separate class map for ICMP traffic." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 67,
                    type: "multiple-choice",
                    image: "images/page36_img1.jpeg",
                    text: "Refer to the exhibit. What does the imp-null tag represent in the MPLS VPN cloud?",
                    options: [
                        { letter: "A", text: "Include the EXP bit" },
                        { letter: "B", text: "Exclude the EXP bit" },
                        { letter: "C", text: "Pop the label." },
                        { letter: "D", text: "Impose the label." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 68,
                    type: "multiple-choice",
                    text: "Which statement about IPv6 ND inspection is true?",
                    options: [
                        { letter: "A", text: "It learns and secures bindings for stateful autoconfiguration addresses in Layer 2 neighbor tables." },
                        { letter: "B", text: "It learns and secures bindings for stateless autoconfiguration, addresses in Layer 2 neighbor tables." },
                        { letter: "C", text: "It learns and secures bindings for stateless autoconfigurationaddresses in Layer 3 neighbor tables." },
                        { letter: "D", text: "It learns and secures bindings for stateful autoconfiguration addresses in Layer 3 neighbor tables" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 69,
                    type: "multiple-choice",
                    image: "images/page36_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured NetFlow on R1, but the flows do not reach the NMS server from R1. Which configuration resolves this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 70,
                    type: "multiple-choice",
                    text: "What is LDP label binding?",
                    options: [
                        { letter: "A", text: "two routers with label distribution session" },
                        { letter: "B", text: "source prefix with label." },
                        { letter: "C", text: "neighboring router with label." },
                        { letter: "D", text: "destination prefix with label" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 71,
                    type: "multiple-choice",
                    text: "How do devices operate in MPLS L3VPN topology?",
                    options: [
                        { letter: "A", text: "P routers support PE to PE VPN tunnel without LSP functionality." },
                        { letter: "B", text: "P and associated PE routers with IGP populate the VRF table in different VPNs" },
                        { letter: "C", text: "P routers provide connectivity between PE devrces with MPLS switching." },
                        { letter: "D", text: "CE routers connect to the provider network and perform LSP functionality." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 72,
                    type: "multiple-choice",
                    text: "What are two MPLS label characteristics? (Choose two.)",
                    options: [
                        { letter: "A", text: "LDP uses TCP for reliable delivery of information." },
                        { letter: "B", text: "Labels are imposed in packets after the Layer 3 header" },
                        { letter: "C", text: "An MPLS label'is a short identifier that identifies a forwarding equivalence class" },
                        { letter: "D", text: "A maximum of two labels can be imposed on an MPLS packet" },
                        { letter: "E", text: "The label edge router swaps labels on the received packets." },
                    ],
                    correct: ["A", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 73,
                    type: "multiple-choice",
                    image: "images/page37_img1.jpeg",
                    text: "Refer to the exhibit. An administrator canlog in to the device using Telnet, butthe attempts to log in to the same device using SSH with the same credentials fail. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Configure to use the Telnet user database for SSH as well." },
                        { letter: "B", text: "Configure transport input all on the VTY lines to allow SSH." },
                        { letter: "C", text: "Configure the VTY lines with login local." },
                        { letter: "D", text: "Configure SSH service on the router." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 74,
                    type: "multiple-choice",
                    image: "images/page38_img1.jpeg",
                    text: "Refer to the exhibit. An engineer wanted to set a tag of 30 to route 10.1.80.65/32 but it failed. How is the issue fixed?",
                    options: [
                        { letter: "A", text: "Modify prefix-list ccnp3 to add 10.1.64.0/20 ge 32." },
                        { letter: "B", text: "Modify prefix-list ccnp3 to add 10.1.64.0/20 le 24." },
                        { letter: "C", text: "Modify route-map ospf-to-eigrp permit 30 and match prefix-list ccnp2." },
                        { letter: "D", text: "Modify route-map ospf-to-eigrp permit 10 and match prefix-list ccnp2." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 75,
                    type: "multiple-choice",
                    text: "Which mechanism provides traffic segmentation within a DMVPN network?",
                    options: [
                        { letter: "A", text: "MPLS" },
                        { letter: "B", text: "BGP" },
                        { letter: "C", text: "RSVP" },
                        { letter: "D", text: "IPSEC" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 76,
                    type: "multiple-choice",
                    image: "images/page39_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator is trying to switch to the privileged EXEC level on R1 but failed. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "enable-password Cisco@123" },
                        { letter: "B", text: "enable password Cisco@123" },
                        { letter: "C", text: "tacacs-server enable-password Cisco@123" },
                        { letter: "D", text: "tacacs server enable-password Cisco@123" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 77,
                    type: "multiple-choice",
                    text: "Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Enable poison reverse." },
                        { letter: "B", text: "Disable poison reverse." },
                        { letter: "C", text: "Enable split horizon." },
                        { letter: "D", text: "Disable split horizon." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 78,
                    type: "multiple-choice",
                    text: "While working with software images, an engineer observes that Cisco DNA Center cannot upload its software image directly from the device. Why is the image not uploading?",
                    options: [
                        { letter: "A", text: "The software image for the device is in bundle mode." },
                        { letter: "B", text: "The device must be resynced to Cisco DNA Center." },
                        { letter: "C", text: "The software image for the device is in install mode." },
                        { letter: "D", text: "The device has lost connectivity to Cisco DNA Center." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 79,
                    type: "multiple-choice",
                    image: "images/page39_img1.jpeg",
                    text: "Refer to the exhibit. An engineer implements uRPF to increase security and stop incoming spoofed IP packets. Some asymmetrically routed packets are also blocked after the configuration. Which command resolves the issue?",
                    options: [
                        { letter: "A", text: "ip verify unicast reverse-path" },
                        { letter: "B", text: "ip verify unicast source reachable-via rx" },
                        { letter: "C", text: "ip verify unicast reverse-path any" },
                        { letter: "D", text: "ip verify unicast source reachable-via any" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 80,
                    type: "multiple-choice",
                    image: "images/page40_img1.jpeg",
                    text: "Refer to the exhibit. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Replace the faulty cable." },
                        { letter: "B", text: "Upgrade the hardware to increase the interface input buffers." },
                        { letter: "C", text: "Resolve the misconfigured QoS parameters." },
                        { letter: "D", text: "Implement traffic policing to prevent the interface input traffic being exceeded." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 81,
                    type: "multiple-choice",
                    image: "images/page41_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must filter incoming EIGRP updates to allow only a set of specific prefixes. The distribute list is tested, and it filters out all routes except network 10.10.10.0/24. How should the engineer temporarily allow all prefixes to be learned by the router again without adjusting the existing access list?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 82,
                    type: "multiple-choice",
                    image: "images/page41_img1.jpeg",
                    text: "Refer to the exhibit. An IP SLA is configured to use the backup default route when he primary is down, but it is not working as desired. Which command fixes the issue?",
                    options: [
                        { letter: "A", text: "R1(config)#ip route 0.0.0.0 0.0.0.0 2.2.2.2 10 track 1" },
                        { letter: "B", text: "R1(config)#ip route 0.0.0.0 0.0.0.0 1.1.1.1 track 1" },
                        { letter: "C", text: "R1(config)#ip sla track 1" },
                        { letter: "D", text: "R1(config)#ip route 0.0.0.0 0.0.0.0 2.2.2.2" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 83,
                    type: "multiple-choice",
                    text: "A network engineer must configure an ElGRP stub router at a site that advertises only connected and summary routes. Which configuration performs this task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 84,
                    type: "multiple-choice",
                    text: "What is an MPLS LDP targeted session?",
                    options: [
                        { letter: "A", text: "LDP session established between LSRs by exchanging TCP hello packets" },
                        { letter: "B", text: "session between neighbors, that are connected no more than, one hop away" },
                        { letter: "C", text: "LDP session established by exchanging multicast hello packets" },
                        { letter: "D", text: "label distribution session between non-directly connected neighbors" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 85,
                    type: "multiple-choice",
                    image: "images/page42_img1.jpeg",
                    text: "Refer to the exhibit. Which set of commands restore reachability to loopback0?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 86,
                    type: "multiple-choice",
                    text: "Which router translates the customer routing information into VPNv4 routes to exchange VPNv4 routes with other devices through MP-BGP?",
                    options: [
                        { letter: "B", text: "VPNV4 RR" },
                        { letter: "C", text: "CE" },
                        { letter: "D", text: "PE" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 87,
                    type: "multiple-choice",
                    image: "images/page43_img1.jpeg",
                    text: "Refer to the exhibit. The authentication is not working as desired and the user drops into user-exec mode. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 88,
                    type: "multiple-choice",
                    image: "images/page43_img1.jpeg",
                    text: "Refer to the exhibit. AS111 is receiving its own routes from AS200 causing a loop in the network. Which configuration provides loop prevention?",
                    options: [
                        { letter: "A", text: "router bgp 1 11 neighbor 195.1.1.1 as-override no neighbor 195.1.2.2 allowas-in" },
                        { letter: "B", text: "router bgp 111 no neighbor 195.1.1.1 allowas-in no neighbor 195.1.2.2 allowas-in" },
                        { letter: "C", text: "router bgp 111 neighbor 195.1.1.1 as-override neighbor 195.1.2.2 as-override" },
                        { letter: "D", text: "router bgp111 neighbor 195.1.2.2 as-override no neighbor 195.1.1.1 allowas-in" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 89,
                    type: "multiple-choice",
                    image: "images/page44_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration denies Telnet traffic to router 2 from 198A:0:205C::1/64?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 90,
                    type: "multiple-choice",
                    image: "images/page45_img1.jpeg",
                    text: "Refer to the exhibit. While troubleshooting an EIGRP neighbor adjacency problem, the network engineer notices that the interface connected to the neighboring router is not participating in the EIGRP process. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure EIGRP metrics on interface FastEthernet0/3." },
                        { letter: "B", text: "Configure the network command under EIGRP address family ipv4." },
                        { letter: "C", text: "Configure the network command under EIGRP address family vrf CLIENT1." },
                        { letter: "D", text: "Configure the network command to network 172.16.0.1 0.0.0.0." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 91,
                    type: "multiple-choice",
                    image: "images/page45_img1.jpeg",
                    text: "Refer to the exhibit. When an FTP client attempts to use passive FTP to connect to the FTP server, the file transfers fail. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Modify traffic filter FTP-SERVER in to the outbound direction." },
                        { letter: "B", text: "Configure active FTP traffic." },
                        { letter: "C", text: "Configure to permit TCP ports higher than 1023." },
                        { letter: "D", text: "Modify FTP-SFRVER access list to remove established at the end." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 92,
                    type: "multiple-choice",
                    text: "Which router takes an active role between two LDP neighbors when initiating LDP session negotiation and LDP TCP connection establishment?",
                    options: [
                        { letter: "A", text: "with one interface in the MPLS backbone" },
                        { letter: "B", text: "with the larger number of LDP TCP neighbors" },
                        { letter: "C", text: "with the lowest IP address" },
                        { letter: "D", text: "with the higher IP address" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 93,
                    type: "multiple-choice",
                    image: "images/page46_img1.jpeg",
                    text: "Refer to the exhibit. In Cisco DNA Center, a network engineer identifies that BGP-learned networks are repeatedly withdrawn from peers. Which configuration must the engineer apply to resolve the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 94,
                    type: "multiple-choice",
                    text: "Which two technologies optimize MPLS infrastructure using bandwidth protection services when experiencing slow response? (Choose two.)",
                    options: [
                        { letter: "A", text: "IP LFA" },
                        { letter: "B", text: "MPLS OAM" },
                        { letter: "C", text: "VPLS" },
                        { letter: "D", text: "SD-MPLS" },
                        { letter: "E", text: "Fast-Reroute" },
                    ],
                    correct: ["A", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 95,
                    type: "multiple-choice",
                    image: "images/page47_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is monitoring reachability of the configured default routes to ISP1 and lSP2.The default route from ISP1 is preferred if available. How is this issue resolved?",
                    options: [
                        { letter: "A", text: "Use the icmp-echo command to track both default routes." },
                        { letter: "B", text: "Use the same AD for both default routes." },
                        { letter: "C", text: "Start lP SLA by matching numbers for track and ip sla commands" },
                        { letter: "D", text: "Start lP SLA by defining frequency and scheduling it." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 96,
                    type: "multiple-choice",
                    image: "images/page47_img1.jpeg",
                    text: "Refer to the exhibit. A junior engineer updated a branch router configuration. Immediately after the change, the engineer receives calls from the help desk that branch personnel cannot reach any network destinations. Which configuration restores service and continues to block 10.1.1.100/32?",
                    options: [
                        { letter: "A", text: "ip prefix-list 102 seq 5 permit 0.0.0.0/32 le 32" },
                        { letter: "B", text: "route-map FILTER-IN permit 20" },
                        { letter: "C", text: "route-map FlLTER-IN deny 5" },
                        { letter: "D", text: "ip prefix-list 102 seq 15 permit 0.0.0.0/32 le 32" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 97,
                    type: "multiple-choice",
                    text: "The Control Plane Policing is not applied to SSH traffic and SSH is open to use any bandwidth available. Which configuration resolves this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 98,
                    type: "multiple-choice",
                    text: "Which feature minimizes DoS attacks on an IPv6 network?",
                    options: [
                        { letter: "A", text: "IPv6 Prefix Guard" },
                        { letter: "B", text: "IPv6 Binding Security Table" },
                        { letter: "C", text: "IPv6 Router Advertisement Guard" },
                        { letter: "D", text: "IPv6 Destination Guard" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 99,
                    type: "multiple-choice",
                    text: "When configuring Control Plane Policing on a router to protect it from malicious traffic, an engineer observes that the configured routing protocols start flapping on that device. Which action in the Control Plane Policy prevents this problem in a production environment while achieving the security objective?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 100,
                    type: "multiple-choice",
                    image: "images/page49_img1.jpeg",
                    text: "Refer to the exhibit. R1 lost its directly connected EIGRP peer 172.16.33.2 (SW1). Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 101,
                    type: "multiple-choice",
                    image: "images/page50_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is trying to log in to R1 via R3 loopback address. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Add transport input none." },
                        { letter: "B", text: "Remove the IPv6 traffic filter from R1 , which is blocking the Telnet." },
                        { letter: "C", text: "Add transport input SCP." },
                        { letter: "D", text: "Remove the IPv6 traffic filter from R1, which is blocking the SSH." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 102,
                    type: "multiple-choice",
                    image: "images/page50_img1.jpeg",
                    text: "Refer to the exhibit The R2 loopback interface is advertised with RIP and EIGRP using default values. Which configuration changes make R1 reach the R2 loopback using RIP?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 103,
                    type: "multiple-choice",
                    image: "images/page51_img1.jpeg",
                    text: "Refer to the exhibit. With the partial configuration of a router-on-a-stick, clients in VLAN 10 on Gi2 cannot obtain IP configuration from the central DHCP server. The DHCP server is reachable by a successful ping from the router. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the ip helper-address 192.168.255.3 command on the Gi2.10 subinterface." },
                        { letter: "B", text: "Configure the ip dhcp pool 1 and network 192.168.210.0 255.255.255.0 commands." },
                        { letter: "C", text: "Configure a valid IP address on the Gi2 interface so that DHCP requests can be forwarded." },
                        { letter: "D", text: "Configure the ip dhcp excluded-address 192.168.255.3 command on the Gi2.10 subinterface." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 104,
                    type: "multiple-choice",
                    image: "images/page51_img1.jpeg",
                    text: "Refer to the exhibit. R3 cannot authenticate via TACACS. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 105,
                    type: "multiple-choice",
                    image: "images/page52_img1.jpeg",
                    text: "Refer to the exhibit. Clients on ALS2 receive IPv4 and IPv6 addresses, but clients on ALS1 receive only IPv4 addresses and not IPv6 addresses. Which action on DSW1 allows clients on ALS1 to receive IPv6 addresses?",
                    options: [
                        { letter: "A", text: "Configure DSW1(config-if)# ipv6 dhcp relay destination 2002:404:404::404:404 GigabitEthernet1/2" },
                        { letter: "B", text: "Configure DSW1(config)# ipv6 route 2002:404:404::404:404/128 FastEthernet1/0" },
                        { letter: "C", text: "Configure DSW1(config-if)# ipv6 helper address 2002:404:404::404:404" },
                        { letter: "D", text: "Configure DSW1(dhcp-config)# default-router 2002:A04:A01::A04:A01" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 106,
                    type: "multiple-choice",
                    image: "images/page52_img1.jpeg",
                    text: "Refer to the exhibit. Which action resolves the adjacency issue?",
                    options: [
                        { letter: "A", text: "Configure the same autonomous system numbers." },
                        { letter: "B", text: "Match the authentication keys." },
                        { letter: "C", text: "Configure the same EIGRP process IDs." },
                        { letter: "D", text: "Match the hello interval timers." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 107,
                    type: "multiple-choice",
                    image: "images/page53_img1.jpeg",
                    text: "Refer to the exhibits. A company with autonomous system number AS65401 has obtained IP address block 209.165.200.224/27 from ARIN .The company needed more IP addresses and was assigned block 209.165.202.128/27 from ISP2. An engineer in ISP1 reports that they are receiving ISP2 routes from AS65401 Which configuration on R1 resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 108,
                    type: "multiple-choice",
                    image: "images/page54_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must block access to the console ports for all corporate remote Cisco devices based on the recent corporate security policy but the security team still can connect through the console port. Which configuration on the console port resolves the issue?",
                    options: [
                        { letter: "A", text: "login and password" },
                        { letter: "B", text: "exec 0 0" },
                        { letter: "C", text: "no-exec" },
                        { letter: "D", text: "transport input telnet" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 109,
                    type: "multiple-choice",
                    image: "images/page54_img1.jpeg",
                    text: "Refer to the exhibit. R1 is not forming adjacency on a point-to-point interface. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "The area numbers must be configured the same on each router." },
                        { letter: "B", text: "The area types must be configured the same on each router." },
                        { letter: "C", text: "The no-summary command must be included in the area configuration on R2." },
                        { letter: "D", text: "The no-summary command must be included in the area configuration on R1." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 110,
                    type: "multiple-choice",
                    image: "images/page54_img1.jpeg",
                    text: "Refer to the exhibit. The administrator successfullylogs into R1 but cannot access privileged mode commands: What should be configured to resolve the issue?",
                    options: [
                        { letter: "A", text: "secret cisco123! at the end of the username command instead of password cisco123!" },
                        { letter: "B", text: "enable secret or enable password commands to enter into privileged mode" },
                        { letter: "C", text: "matching password on vty lines as cisco123!" },
                        { letter: "D", text: "aaa authorization reverse-access" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 111,
                    type: "multiple-choice",
                    text: "Which configuration feature should be used to block rogue router advertisements instead of using the IPv6 Router Advertisement Guard feature?",
                    options: [
                        { letter: "A", text: "PVLANs with community ports associated to route advertisements and isolated ports for nodes." },
                        { letter: "B", text: "PVLANs with promiscuous ports associated to route advertisements and isolated ports for nodes." },
                        { letter: "C", text: "IPv4 ACL blocking route advertisements from nonauthorized hosts." },
                        { letter: "D", text: "VACL blocking broadcast frames from nonauthorized hosts." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 112,
                    type: "multiple-choice",
                    text: "A network administrator performed a Compact Flash Memory upgrade on a Cisco Catalyst 6509 Switch. Everything is functioning normally except SNMP, which was configured to monitor the bandwidth of key interfaces but the interface indexes are changed. Which global configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "snmp ifindex permanent" },
                        { letter: "B", text: "snmp-server ifindex persist" },
                        { letter: "C", text: "snmp ifindex persist" },
                        { letter: "D", text: "snmp-server ifindex permanent" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 113,
                    type: "multiple-choice",
                    image: "images/page55_img1.jpeg",
                    text: "Refer to the exhibit. An administrator wanted to make R1 always elected as DR, R2 as BDR, and R3 as DROTHER but could not achieve the desired results. Which two configurations resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "On the R2 F0/0 interface, configure OSPF priority to 200." },
                        { letter: "B", text: "On the R1 F0/0 interface, configure OSPF priority to 255." },
                        { letter: "C", text: "On the R1 F0/0 interface, configure OSPF priority to 202." },
                        { letter: "D", text: "On the R3 F0/0 interface, configure OSPE priority to 201." },
                        { letter: "E", text: "On the R2 F0/0 interface, configure OSPF priority to 201." },
                    ],
                    correct: ["B", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 114,
                    type: "multiple-choice",
                    text: "What is a characteristic of IPv6 RA Guard?",
                    options: [
                        { letter: "A", text: "It is unable to protect tunneled traffic." },
                        { letter: "B", text: "RA messages are allowed from the host port to the switch." },
                        { letter: "C", text: "It is supported on the egress direction of the switch." },
                        { letter: "D", text: "It filters rogue RA broadcasts from connected hosts." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 115,
                    type: "multiple-choice",
                    image: "images/page56_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer troubleshooting a packet drop problem for the host 172.16.100.5 notices that only one link is used and installed on the routing table, which saturates the bandwidth. Which action must the engineer take to resolve the high bandwidth utilization problem and share the traffic toward this host between the two available links?",
                    options: [
                        { letter: "A", text: "Set the eigrp variance equal to 4 to install a second route with a metric not larger than 4 times of the best metric." },
                        { letter: "B", text: "Change the EIGRP delay metric to meet the feasibility condition." },
                        { letter: "C", text: "Set the eigrp variance equal to 3 to install a second route with a metric not larger than 3 times of the best metric." },
                        { letter: "D", text: "Disable the eigrp split horizon loop protection mechanism." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 116,
                    type: "multiple-choice",
                    text: "An engineer creates a Cisco DNA Center cluster with three nodes, but all the services are running on one host node. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Click system updates, and upgrade to the latest version of Cisco DNA Center." },
                        { letter: "B", text: "Restore the link on the switch interface that is connected to a cluster link on the Cisco DNA Center." },
                        { letter: "C", text: "Enable service distribution from the Systems 360 page." },
                        { letter: "D", text: "Click the master host node with al the services and select services to be moved to other hosts." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 117,
                    type: "multiple-choice",
                    text: "Which protocol must be secured with MD5 authentication across the MPLS cloud to prevent hackers from introducing bogus routers?",
                    options: [
                        { letter: "A", text: "RSVP" },
                        { letter: "B", text: "LSP" },
                        { letter: "C", text: "LDP" },
                        { letter: "D", text: "MP-BGP" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 118,
                    type: "multiple-choice",
                    image: "images/page57_img1.jpeg",
                    text: "Refer to the exhibit. A PC is configured to obtain an IP address automatically, but it receives an IP address only from the 169.254.0.0 subnet. The DHCP server logs contained no DHCPDISCOVER message from the MAC address of the PC. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure an ip helper-address on the router to forward DHCP messages to the server." },
                        { letter: "B", text: "Configure a static IP address on the PC and exclude it from the DHCP pool." },
                        { letter: "C", text: "Configurea DHCP reservation on the server for the PC." },
                        { letter: "D", text: "Configure DHCP Snooping on the switch to forward DHCP messages to the server." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 119,
                    type: "multiple-choice",
                    image: "images/page58_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is trying to connect to a device with SSH but cannot connect. The engineer connects by using the console and finds the displayed output when troubleshooting. Which command must be used in configuration mode to enable SSH on the device?",
                    options: [
                        { letter: "A", text: "crypto key generate rsa" },
                        { letter: "B", text: "no ip ssh disable" },
                        { letter: "C", text: "ip ssh version 2" },
                        { letter: "D", text: "ip ssh enable" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 120,
                    type: "multiple-choice",
                    image: "images/page58_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must filter EIGRP updates that are received to block all 10.10.10.0/24 prefixes. The engineer tests the distribute list and finds one associated prefix.Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "There is a permit in the ACL that allows this prefix into EIGRP. The ACL should be modified to deny 10.10.10.0 0.0.0.255." },
                        { letter: "B", text: "There is a permit in the ACL that allows this prefix into EIGRP. The ACL should be medified to deny 10.10.10.0 255.255.255.0." },
                        { letter: "C", text: "There is a permit in the route map that allows this prefix. A deny 20 statement is required with no match condition to block the prefix." },
                        { letter: "D", text: "There is a permit in the route map that allows this prefix. A deny 20 statement is required with a match condition to match a new ACL that denies all prefixes." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 121,
                    type: "multiple-choice",
                    text: "What are two characteristics of a VRF instance? (Choose two.)",
                    options: [
                        { letter: "A", text: "A customer site can be associated to different VRFs." },
                        { letter: "B", text: "Each VRF has a different set of routing and CEF tables." },
                        { letter: "C", text: "An interface must be associated to one VRF." },
                        { letter: "D", text: "It is defined by the VPN membership of a customer site attached to a P device." },
                        { letter: "E", text: "All VRFs share customers routing and CEF tables." },
                    ],
                    correct: ["B", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 122,
                    type: "multiple-choice",
                    image: "images/page58_img1.jpeg",
                    text: "Refer to the exhibit. R3 is learning the 1.0.0.0/24 route through OSPF instead of EIGRP. Which action causes R3 to choose EIGRP to reach the 1.0.0.0/24 network?",
                    options: [
                        { letter: "A", text: "Configure EIGRP administrative distance to 120." },
                        { letter: "B", text: "Configure EIGRP administrative distance to 110." },
                        { letter: "C", text: "Configure OSPF administrative distance to 120." },
                        { letter: "D", text: "Configure OSPF administrative distance to 200." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 123,
                    type: "multiple-choice",
                    text: "What is a characteristic of Layer 3 MPLS VPNs?",
                    options: [
                        { letter: "A", text: "Traffic engineering capabilities provide QoS and SLAs." },
                        { letter: "B", text: "Authentication is performed, by using digital certificates or preshared keys." },
                        { letter: "C", text: "LSP signaling requires the use of unnumbered IP links for traffic engineering." },
                        { letter: "D", text: "Traffic engineering supports multiple lGP instances." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 124,
                    type: "multiple-choice",
                    text: "How does MPLS Layer 3 VPN function?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 125,
                    type: "multiple-choice",
                    text: "Which router attaches the VPN label to incoming packets from CE routing?",
                    options: [
                        { letter: "A", text: "CE router" },
                        { letter: "B", text: "P router" },
                        { letter: "C", text: "core router" },
                        { letter: "D", text: "PE router" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 126,
                    type: "multiple-choice",
                    image: "images/page60_img1.jpeg",
                    text: "Refer to the exhibit, While troubleshooting an issue on the network, an engineer notices that a TCP Connect operation failed on port 3000 between R101 and R201, Which command must be configured on R201 to respond to the R101 IP SLA configurations with a control connection on UDP port 1967?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 127,
                    type: "multiple-choice",
                    image: "images/page60_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration is required for R2 to get the IP address from the DHCP server?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 128,
                    type: "multiple-choice",
                    image: "images/page61_img1.jpeg",
                    text: "Refer to the exhibit. Router R4 is configured correctly with default OSPF values. A network engineer configured R7 for OSPF. R7 must not be elected as a DR for the segment between R4-R7. The adjacency between R4 and R7 failed to form. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 129,
                    type: "multiple-choice",
                    text: "What are the two major components of an MPLS-based VPN? (Choose two.)",
                    options: [
                        { letter: "A", text: "MP-BGP peering of VPN community CE devices" },
                        { letter: "B", text: "VPN route distinguisher" },
                        { letter: "C", text: "VPN route reflectors" },
                        { letter: "D", text: "MP-BGP peering of VPN community PE devices" },
                        { letter: "E", text: "VPN route target communities F. MP-BGP peering of VPN community P devices" },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 130,
                    type: "multiple-choice",
                    text: "How are LDP neighbors discovered?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 131,
                    type: "multiple-choice",
                    text: "What are the two goals of micro BFD sessions? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 132,
                    type: "multiple-choice",
                    text: "What is LDP used for in an LSR?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 133,
                    type: "multiple-choice",
                    image: "images/page63_img1.jpeg",
                    text: "]Refer to the exhibit. R1 should receive 10.16.2.0/24 from R2. Which action resoives the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 134,
                    type: "multiple-choice",
                    text: "What is a characteristic of an MPLS LSP tunnel?",
                    options: [
                        { letter: "A", text: "bidirectional tunnel" },
                        { letter: "B", text: "unidirectional tunnel" },
                        { letter: "C", text: "hop-by-hoo tunnel" },
                        { letter: "D", text: "secured bidirectional tunnel" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 135,
                    type: "multiple-choice",
                    text: "Which technique removes the outermost label of an MPLS-tagged packet before the packet is forwarded to an adjacent LER?",
                    options: [
                        { letter: "A", text: "label swap" },
                        { letter: "B", text: "explicit-null" },
                        { letter: "C", text: "PHP" },
                        { letter: "D", text: "label imposition" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 136,
                    type: "multiple-choice",
                    image: "images/page63_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator enables DHCP snooping on the Cisco Catalyst 3750-X switch and configures the uplink port (Port—channel2) as a trusted port. Clients are not receiving an IP address, but when DHCP snooping is disabled, clients start receiving IP addresses. Which global command resotves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 137,
                    type: "multiple-choice",
                    text: "Network operations report issues with receiving too many external routes, which caused CPU spike on routers with smaller memories. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 138,
                    type: "multiple-choice",
                    image: "images/page64_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer must provision two DMVPN spokes sites with a zero-touch deployment model. The spoke must communicate through hub with other spokes. Which configuration provisions these sites?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 139,
                    type: "multiple-choice",
                    image: "images/page64_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must troubleshoot an issue with the sea authentication that affected the user's login to router R1. Which command allows the configured user to authenticate?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 140,
                    type: "multiple-choice",
                    image: "images/page65_img1.jpeg",
                    text: "Refer to the exhibit. The IP SLA probes 1, 2, and 3 verify the reachability of three distinct DNS servers hosted by ISP1, If all DNS servers are unreachable, the router should failover to ISP2 for Internet connectivity. However, the configuration is causing the router to failover to ISP2 even if some of the DNS servers are still reachable. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Reference the track object 14 to the [P SLA probes 1, 2, and 3 directly." },
                        { letter: "B", text: "Use the administrative distance of 255 for the default route through lSP2." },
                        { letter: "C", text: "Use the delay command in the track object 14." },
                        { letter: "D", text: "Rewrite the track object 14 to use the \"or\" operator." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 141,
                    type: "multiple-choice",
                    image: "images/page65_img1.jpeg",
                    text: "Refer to the exhibit. The BGP connection went from established to active when a new router was provisioned between CSR301 and its eBGP peers. Which command resolves the IPv4 peering problem?",
                    options: [
                        { letter: "A", text: "neighbor 10.103.88.14 disable-connected-check" },
                        { letter: "B", text: "neighbor 10.103.88.14 allowas-in" },
                        { letter: "C", text: "neighbor 10.103.88.14 ebgp-multihop" },
                        { letter: "D", text: "neighbor 10.103.88.14 next-hop-self all" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 142,
                    type: "multiple-choice",
                    text: "What are two features of BFD? (Choose two.)",
                    options: [
                        { letter: "A", text: "scalable" },
                        { letter: "B", text: "replaces hello messages" },
                        { letter: "C", text: "requires routing protocols" },
                        { letter: "D", text: "intensive on CPU for Layer 2 links" },
                        { letter: "E", text: "reliable" },
                    ],
                    correct: ["A", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 143,
                    type: "multiple-choice",
                    text: "A switch has been configured to provide DHCP relay on VLAN100 to a server with an IP address of 10.1.1.1. The DHCP server is sending syslog reports of multiple TFTP requests that also originate from the switch. As a result, the server CPU exceeded a configured threshold. Which action does the network administrator recommend to bring the server CPU threshold down?",
                    options: [
                        { letter: "A", text: "Configure the switch with an access list on VLAN100 to deny TFTP." },
                        { letter: "B", text: "Configure the switch with no ip forward-protocol udp 69 on VLAN100." },
                        { letter: "C", text: "Configure the switch with a VACL on VLAN100 to deny TFTP." },
                        { letter: "D", text: "Configure the switch with ip forward-protocol udp 67 globally." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 144,
                    type: "multiple-choice",
                    image: "images/page67_img1.jpeg",
                    text: "Refer to the exhibit. Which two actions restrict access to router R1 by SSH? (Choose two.)",
                    options: [
                        { letter: "A", text: "Configure transport output ssh on line vty and remove sequence 10 from access list 199." },
                        { letter: "B", text: "Remove class-map ANY from service-policy CoPP." },
                        { letter: "C", text: "Configure transport input ssh on line vty and remove sequence 30 from access list 100." },
                        { letter: "D", text: "Configure transport output ssh on line vty and remove sequence 20 from access list 100." },
                        { letter: "E", text: "Remove sequence 10 from access list 100 and add sequence 20 deny tcp any any eq telnet to access list 199" },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 145,
                    type: "multiple-choice",
                    image: "images/page67_img1.jpeg",
                    text: "Refer to the exhibit. The lPsec profile configuration must be optimal to address the extra bytes overhead per packet. Which configuration must be applied by the engineer on all routers to meet the requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 146,
                    type: "multiple-choice",
                    image: "images/page68_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must route the management server traffic to the network 10.0.250.0 overthe 2 Mbps link. Which configuration accomplishes this task on R1?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 147,
                    type: "multiple-choice",
                    image: "images/page68_img1.jpeg",
                    text: "Refer to the exhibit. Host A successfully pings host C, but host B fails to ping host C. Which action reselves this issue?",
                    options: [
                        { letter: "A", text: "Disable auto-summary in RIP and EIGRP." },
                        { letter: "B", text: "Redistribute EIGRP 100 into RIP on R1." },
                        { letter: "C", text: "Change the first statement in access list 100 to permit access." },
                        { letter: "D", text: "Enable loose mode uRPF." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 148,
                    type: "multiple-choice",
                    text: "The neighbor relationship is not coming up. Which configuration resotves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 149,
                    type: "multiple-choice",
                    text: "In an IPv6 network, the network administrator restricted remote access of the core router to a single user. The administrator configured the IPv6 access list and applied it on the WAN interface of the core router. The administrator also wanted to investigate who else is trying to access the router and added a permit host entry with log statement in the access list but could not find any details. Which action does the network administrator take to resolve the issue?",
                    options: [
                        { letter: "A", text: "Apply the access list on line vty using the ipv6 access-class. out command." },
                        { letter: "B", text: "Apply the access list on all interfaces using the ipv6 access-class in command." },
                        { letter: "C", text: "Apply the access list on line vty using the ipv6 access-class in command." },
                        { letter: "D", text: "Apply the access list on the WAN interface using the ipv6 traffic-filter out command." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 150,
                    type: "multiple-choice",
                    text: "The network administrator configured CoPP so that EIGRP traffic toward the device is limited to 2 mbps. Any traffic that exceeds this limit must also be allowed at this point for traffic analysis.",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 151,
                    type: "multiple-choice",
                    text: "Which type of BFD session is created on a broadcast Ethernet interface with OSPF?",
                    options: [
                        { letter: "A", text: "with all OSPF routers" },
                        { letter: "B", text: "with the DR and BDR, but not any DROTHER routers" },
                        { letter: "C", text: "only on P2P Ethernet interfaces" },
                        { letter: "D", text: "only with the DR" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 152,
                    type: "multiple-choice",
                    image: "images/page70_img1.jpeg",
                    text: "Refer to the exhibit. A prefix of 10.1.1.0/31 is assigned for the DWDM circuit between R1 and R2 to connect the trim attached VRFs on each router. Which configuration provides the required connectivity on R1?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 153,
                    type: "multiple-choice",
                    text: "What are the two benefits of using BFD? (Choose two.)",
                    options: [
                        { letter: "A", text: "forwarding path failure detection" },
                        { letter: "B", text: "supports UDLD failure" },
                        { letter: "C", text: "subsecond failure detection" },
                        { letter: "D", text: "supports all routing protocols" },
                        { letter: "E", text: "synchronous path determination" },
                    ],
                    correct: ["A", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 154,
                    type: "multiple-choice",
                    image: "images/page71_img1.jpeg",
                    text: "Refer to the exhibit. An enterprise user reports an access issue with IPv6 content on the Internet. The user can access IPv4 content that is at the data center. Which action resolves the issue with IPv6 content?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 155,
                    type: "multiple-choice",
                    image: "images/page72_img1.jpeg",
                    text: "Refer to the exhibit. R1 is directly connected to R2 over network 10.100.14.0/24. An engineer configures R1 to advertise a static route that is connected to a local loopback for network 10.100.13.0/24. The network is not in the routing table of R2. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "The redistribution command is incorrect on R1. The default metric metric 200 should be included with the redistribution command." },
                        { letter: "B", text: "R2 must use a different OSPF process number and should be changed to ospf 1 to match R1." },
                        { letter: "C", text: "The redistribution command is incorrect on R1. The keyword subnets should be included with the redistribution command." },
                        { letter: "D", text: "The Loopback interface on R1 is administratively down. The interface should be enabled with the no shutdown command." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 156,
                    type: "multiple-choice",
                    image: "images/page72_img1.jpeg",
                    text: "Refer to the exhibit. R1 must advertise all loopback interfaces IP addresses to neighbors, but EIGRP neighbors receive a summary route. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Disable auto summarization on R1." },
                        { letter: "B", text: "Enable EIGRP on loopback interfaces." },
                        { letter: "C", text: "Redistribute connected routes into EIGRP." },
                        { letter: "D", text: "Remove the 10.100.1.0/24 static route." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 157,
                    type: "multiple-choice",
                    image: "images/page73_img1.jpeg",
                    text: "Refer to the exhibit. Which action installs routes into the routing table of R1 and R3?",
                    options: [
                        { letter: "A", text: "IGP does not have a route to R4. Rectify route reachability." },
                        { letter: "B", text: "BGP Synchronization has been enabled. Disable synchronization." },
                        { letter: "C", text: "BGP has not been redistributed into. the IGP Redistribute BGP." },
                        { letter: "D", text: "BGP weight is set to 0. Configure ahigher weight for these routes." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 158,
                    type: "multiple-choice",
                    image: "images/page74_img1.jpeg",
                    text: "Refer to the exhibit. Which two configurations are required on R2 to prevent a routing loop caused by the redistribution from OSPF back into EIGRP? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 159,
                    type: "multiple-choice",
                    image: "images/page74_img1.jpeg",
                    text: "Refer to the exhibit. The eBGP neighbor 10.1.1.1 of router R2 receives and installs the prefix, but the community value is not found in the BGP routing table. How must this issue be resolved?",
                    options: [
                        { letter: "A", text: "R1 must have a route map assigned to neighbor R2, which is not matching the community values." },
                        { letter: "B", text: "Community values are nontransitive and R2 is an eBGP peer, configure R2 to send community." },
                        { letter: "C", text: "R2 is not sending the community value to neighbor R1, configure R2 to send community." },
                        { letter: "D", text: "R1 must have a route map assigned to neighbor R2, which is clearing the community values." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 160,
                    type: "multiple-choice",
                    image: "images/page74_img1.jpeg",
                    text: "Refer to the exhibit. An engineer investigates an IPv6 EIGRP neighbor adjacency issue that sees the neighbors flapping and issued a ping from R1 to its directly connected neighbor. The link between the switches is stable at Layer 2, and other connected devices are also functioning. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 161,
                    type: "multiple-choice",
                    image: "images/page75_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator is troubleshooting an authentication failure issue during login into R2 using a RADIUS server user account. The network administrator can ping the RADIUS server, but the user access to SSH is denied on R2. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the username in RADIUS server database." },
                        { letter: "B", text: "Enable AAA authorization to allow SSH connections." },
                        { letter: "C", text: "Modify the aaa command to replace TACACS+ with RADIUS." },
                        { letter: "D", text: "Remove \"local\" from the aaa authentication command." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 162,
                    type: "multiple-choice",
                    text: "What does the PE router convert the IPv4 prefix to within an MPLS VPN?",
                    options: [
                        { letter: "A", text: "VPN-IPv4 prefix combined with the 64-bit route distinguisher" },
                        { letter: "B", text: "prefix that cembines the ASN,PE router-id, and IP prefix" },
                        { letter: "C", text: "48-bit route combining the IP and PE router-id" },
                        { letter: "D", text: "eBGP path association between the PE and CE sessions" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 163,
                    type: "multiple-choice",
                    text: "How does an MPLS Layer 3 VPN differentiate the IP address space used between each VPN?",
                    options: [
                        { letter: "A", text: "by RT" },
                        { letter: "B", text: "by MP-BGP" },
                        { letter: "C", text: "by RD" },
                        { letter: "D", text: "by address family" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 164,
                    type: "multiple-choice",
                    image: "images/page76_img1.jpeg",
                    text: "Refer to the exhibit. An error message \"an OSPF-4-FLOOD_WAR\" is received on SW2 from SW1. SW2 is repeatedly receiving its own link-state advertisement and flushes it from the network. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Resolve different subnet mask issue on the link." },
                        { letter: "B", text: "Change area 5 to a normal area from a nonstub area." },
                        { letter: "C", text: "Configure Layer 3 port channel on interfaces between switches." },
                        { letter: "D", text: "Resolve dupIicate IP address issue-in the network." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 165,
                    type: "multiple-choice",
                    image: "images/page76_img1.jpeg",
                    text: "Refer to the exhibit. Which command must be configured to make VRF CCNP work?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 166,
                    type: "multiple-choice",
                    image: "images/page77_img1.jpeg",
                    text: "Refer to the exhibit. An administrator is attempting to disable the automatic logout after a period of inactivity. After logging out, the console stopped responding to all keyboard inputs. Remote access through SSH still works. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the exec command on line con 0." },
                        { letter: "B", text: "Configure the default exec-timeout command on line con 0." },
                        { letter: "C", text: "Configure the no exec-timeout command an line con 0." },
                        { letter: "D", text: "Configure the absolute-timeout command on line con 0." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 167,
                    type: "multiple-choice",
                    image: "images/page77_img1.jpeg",
                    text: "Refer to the exhibit. A user from Area-55 cannot access the HTTPs services running on the Area-0 server farm. An engineer identifies that the routing table of SW- 1 is not learning the Area-55 routes. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 168,
                    type: "multiple-choice",
                    text: "After finishing both site router configurations, none of the LSA 3,4,5, and 7 are installed at Site A router. Which configuration resolves this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 169,
                    type: "multiple-choice",
                    text: "An engineer configures PBR on R5 and wants to create a policy that matches traffic destined toward 10.10.10.0/24 and forwards it toward 10.1.1.1. This traffic must also have its IP precedence set to 5. All other traffic should be forwarded toward 10.1.1.2 and have its IP precedence set to 0. Which configuration meets the requirements?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 170,
                    type: "multiple-choice",
                    image: "images/page79_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configures router B to direct all traffic from host 192.168.1.3 to router C. All other traffic must be routed through normal routing- protocol operations. Which configuration accomplishes the task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 171,
                    type: "multiple-choice",
                    text: "A company is redesigning WAN infrastructure so that all branch sites must communicate via the head office and the head office can directly communicate with each site independently. The network engineer must configure the head office router by considering zero-touch technology when adding new sites in the same WAN infrastructure. Which configuration must be applied to the head office router to meet this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 172,
                    type: "multiple-choice",
                    image: "images/page80_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured router R3 to redistribute the prefix 10.10.10.0/24 from OSPF into EIGRP. R1 has no connectivity to the prefix. Which action enables receipt of prefixes on R1?",
                    options: [
                        { letter: "A", text: "R1 is not receiving the next-hop IP address of R3. R2 must enable the network 10.20.20.0/24 within EIGRP." },
                        { letter: "B", text: "Duplicate router IDs on R1 and R3. R1 should modify its router ID." },
                        { letter: "C", text: "R1 does not have a neighbor relationship with R2. The EIGRP process should be cleared on R1." },
                        { letter: "D", text: "R3 is advertising the 10.20.20.0/24 prefix with a TTL of 1. R3 must set theTTL to 2 for this prefix." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 173,
                    type: "multiple-choice",
                    image: "images/page81_img1.jpeg",
                    text: "Refer to the exhibit. After a security hardening was performed on a router, the administrator cannot access the command line of any remote device. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Remove the transport output none command from the line con 0 sections" },
                        { letter: "B", text: "Move Telnet and SSH commands toa nonzero privilege levels" },
                        { letter: "C", text: "Remove the egress ACL blocking Telnet and SSH on the router interfaces." },
                        { letter: "D", text: "Modify the AAA policy to allow the user to run the Telnet and SSH commands." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 174,
                    type: "multiple-choice",
                    image: "images/page81_img1.jpeg",
                    text: "Refer to the exhibit. The users from subnet 172.1.61.16/28 are experiencing connectivity issues to subnet 172.16.23.2/48. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 175,
                    type: "multiple-choice",
                    text: "The Control Plane Policing failed to monitor and police OSPF tratfic. Which configuration resolves this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 177,
                    type: "multiple-choice",
                    image: "images/page83_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must configure a per VRF for TACACS+ for company A. Which configuration on RTG-1 accomplishes the task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 178,
                    type: "multiple-choice",
                    image: "images/page83_img1.jpeg",
                    text: "Refer to the exhibit. A connection between the campus and HQ locations has been routing asymmetrically over MPLS and tunnels over the public internet. Which primary factor must be considered to avoid using MPLS links to route traffic between those sites if EIGRP is used as an IGP and resolve asymmetric routing?",
                    options: [
                        { letter: "A", text: "EIGRP must use a different process on each end of the internet connection to avoid MPLS routes." },
                        { letter: "B", text: "EIGRP must replace eBGP on each end of the MPLS connection with the same AS number." },
                        { letter: "C", text: "EIGRP must be reconfigured to uses higher AD than eBGP." },
                        { letter: "D", text: "EIGRP must be redistributed into eBGP to make it the primary path on the campus router." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 179,
                    type: "multiple-choice",
                    image: "images/page84_img1.jpeg",
                    text: "Refer to the exhibit. R2 is a route reflector, and R1 and R3 are route reflector clients. The route reflector learns the route to 172.16.25.0/24 from R1. but it does not advertise to R3. What is the reason the route is not advertised?",
                    options: [
                        { letter: "A", text: "In route reflector setups, prefixes are not advertised from one client to another." },
                        { letter: "B", text: "R2 does not have a route to the next hop, so R2 does not advertise the prefix to other clients." },
                        { letter: "C", text: "In route reflector setup, only classful prefixesare advertised to other clients." },
                        { letter: "D", text: "Route reflector setup requires full IBGP mesh between the routers." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 180,
                    type: "multiple-choice",
                    text: "This configuration failed to send routes to AS 100 as the preferred path. Which set of configurations resoives the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 181,
                    type: "multiple-choice",
                    image: "images/page85_img1.jpeg",
                    text: "Refer to the exhibit. The R2 OSPF route 10.2.2.0/24 shows in the R1 EIGRP routing table without route redistribution performed between OSPF and EIGRP routing protocols. Which configuration is required on router R2 to resolve the issue?",
                    options: [
                        { letter: "A", text: "Add the passive-interface FastEthemet 1/0 command in ElGRP 100." },
                        { letter: "B", text: "Add the passive-interface FastEihernet 0/0 command in OSPF 1." },
                        { letter: "C", text: "Add the no auto-summary command in ElGRP 100." },
                        { letter: "D", text: "Replace the network 10.0.0.0 command with FastEthernet0/0 network in EIGRP 100." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 182,
                    type: "multiple-choice",
                    image: "images/page86_img1.jpeg",
                    text: "Refer to the exhibit. A customer reported a failure and intermittent disconnection between two office buildings, site X and site Y. The network team finds that site X and site Y are exchanging email application traffic with the data center network. Which configuration resolves the issue between site X and site Y?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 183,
                    type: "multiple-choice",
                    image: "images/page87_img1.jpeg",
                    text: "Refer to the exhibit. R1 should have BGP routes as \"i\". Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 184,
                    type: "multiple-choice",
                    text: "Both routers are using default values. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Upgrade the peer device IOS to support the goodbye message that establishes adjacency." },
                        { letter: "B", text: "Configure metric weights between the peers to calculate the Valid K-value." },
                        { letter: "C", text: "Resolve metric differences between the peers to calculate the valid K-value." },
                        { letter: "D", text: "Match authentication parameters to support the goodbye message that establishes adjacency." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 185,
                    type: "multiple-choice",
                    image: "images/page88_img1.jpeg",
                    text: "Refer to the exhibit. ISP 1 and ISP 2 directly connect to the internet. A customer is tracking both ISP inks to achieve redundancy and cannot see the Cisco IOS lP SLA tracking output on the router console. Which command is missing from the IP SLA configuration?",
                    options: [
                        { letter: "A", text: "Start-time 0" },
                        { letter: "B", text: "Start-time immediately" },
                        { letter: "C", text: "Start-time 00:00" },
                        { letter: "D", text: "Start-time now" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 186,
                    type: "multiple-choice",
                    image: "images/page88_img1.jpeg",
                    text: "Refer to the exhibit. The ISP router is fully configured for customer A and customer B using the VRF-Lite feature. What is the minimum configuration required for customer A to communicate between routers A1 and A2?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 187,
                    type: "multiple-choice",
                    text: "An engineer creates a default static route on a router with a next hop of 10.1.1.1. On inspection, the engineer finds the router has two VRFs, Red and Blue. The next hop is valid for both VRFs and exists in each assigned VRF. Which configuration achieves connectivity?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 188,
                    type: "multiple-choice",
                    image: "images/page89_img1.jpeg",
                    text: "Refer to the exhibit. After an engineer modified the configuration for area 7 to permit type 1, 2, and 7 LSAs only, users connected to router R9 reported that they could no longer access the internet Which configuration restores internet access to users on R9 and permits only LSA type 1,2, and 7?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 189,
                    type: "multiple-choice",
                    text: "How does BFD protocol work?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 190,
                    type: "multiple-choice",
                    image: "images/page90_img1.jpeg",
                    text: "Refer to the exhibit. The BGP neighbor is not coming up. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Enable synchronization between the neighbors to bring the neighborship up." },
                        { letter: "B", text: "Configure the ebgp-multihop 2 command on R1 toward the neighbor." },
                        { letter: "C", text: "The route map on eBGP sessions must allow the prefixes from the neighbor." },
                        { letter: "D", text: "Configure a valid router ID on the neighbor that shows an invalid router ID of 0.0.0.0." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 191,
                    type: "multiple-choice",
                    image: "images/page91_img1.jpeg",
                    text: "Refer to the exhibit. The neighboring router does not show any summarized prefixes. How must the cenfigured summarization be seen on the neighboring router?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 192,
                    type: "multiple-choice",
                    image: "images/page91_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer is troubleshooting an AAA authentication issue for R1 from R2. When an engineer tries to open a telnet connection to R1, it opens the connection but shows a %Authorization failed error message on the terminal and closes the connection silently. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Resolve tacacs+ server reachability from the R1 router." },
                        { letter: "B", text: "Configure authorization commands in the tacacs+ server for the R1 router." },
                        { letter: "C", text: "Configure the tacacs+ server host IP on the R1 router." },
                        { letter: "D", text: "Resolve tacacs+ server host IP authentication miss configuration on the R1 router." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 193,
                    type: "multiple-choice",
                    image: "images/page92_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must configure EIGRP between R1 and R2 with no summary route. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 194,
                    type: "multiple-choice",
                    image: "images/page92_img1.jpeg",
                    text: "Refer to the exhibit. The IT router is connected with the Sales and Marketing departments. The interfaces have been assigned to their respective VRFs to keep the two department routes isolated. Which configuration set must the IT router use for BGP to distribute routes for each department that maintains their own routing table for network isolation?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 195,
                    type: "multiple-choice",
                    image: "images/page94_img1.jpeg",
                    text: "Refer to the exhibit. During an unannounced link-maintenance window at the ISP, the DCI link went down, which caused a significant service outage. What action must the network engineer take at the head office to ensure Area-0 connectivity without intervention from the ISP?",
                    options: [
                        { letter: "A", text: "Create a virtual link in Area-0 between HO E0/0 and DR E0/0." },
                        { letter: "B", text: "Create a virtual link in Area-110 between R1 S0/0 and R2 S0/0." },
                        { letter: "C", text: "Create a GRE tunnel interface in Area-0 between HO E0/0 and DR E0/0." },
                        { letter: "D", text: "Create a GRE tunnel interface in Area-110 between R1 S0/0 and R2 S0/0." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 196,
                    type: "multiple-choice",
                    image: "images/page94_img1.jpeg",
                    text: "Refer to the exhibit. An engineer uses NetFlow to troubleshoot a voice quality issue from the branch office and notices that the traffic is not arriving in the correct format to the collector. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 197,
                    type: "multiple-choice",
                    image: "images/page95_img1.jpeg",
                    text: "Refer to the exhibit. An engineer observes that every time the lCMP packet is lost at a polling interval, track 1 goes down, which causes unnecessary disruption and instability in the network. The engineer does not want the traffic to be rerouted if the loss of lCMP packets is negligible. If the packet loss is persistent for a longer duration, the track must go down and the traffic must be rerouted. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Define a delay timer under track 1." },
                        { letter: "B", text: "Change the IP SLA schedule to run only at certain intervals." },
                        { letter: "C", text: "Increase the threshold value from 1000 to 1500." },
                        { letter: "D", text: "Increase the timeout value from 1000 to 1500." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 198,
                    type: "multiple-choice",
                    image: "images/page95_img1.jpeg",
                    text: "Refer to the exhibit. After a misconfiguration by a junior engineer, the console access to router A is not working. Which configuration allows access to router A?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 199,
                    type: "multiple-choice",
                    image: "images/page95_img1.jpeg",
                    text: "Refer to the exhibit. Users in BGP autonomous system 65500 cannot access IPv4 resources in the EIGRP IPv4 autonomous system 100. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Redistribute BGP routes into OSPF." },
                        { letter: "B", text: "Redistribute OSPF internal routes into BGP." },
                        { letter: "C", text: "Redistribute EIGRP routes into OSPF." },
                        { letter: "D", text: "Redistribute OSPF external routee into BGP." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 200,
                    type: "multiple-choice",
                    image: "images/page96_img1.jpeg",
                    text: "Refer to the exhibit. The user experiences random packet drops when accessing Server-1 but does not have any issues when reaching out to Server-2. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the distance under the EIGRP process to 10 on R2." },
                        { letter: "B", text: "Modify the distance 10 under the OSPF process on R1 to 90." },
                        { letter: "C", text: "Remove the diatance 10 under the OSPF process on R1." },
                        { letter: "D", text: "Configure the distance under the EIGRP process to 10 on R1." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 201,
                    type: "multiple-choice",
                    image: "images/page97_img1.jpeg",
                    text: "Refer to the exhibit. OSPF adjacency is broken between router A and router B. Which configuration on router B resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 202,
                    type: "multiple-choice",
                    image: "images/page97_img1.jpeg",
                    text: "Refer to the exhibit. R1 cannot reach the R4 loopback address (2001:4/128). Which configuration provides the most optimal and scalable resolution to the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 203,
                    type: "multiple-choice",
                    text: "The network administrator deployed the Binding Table Recovery feature. Which two devices recover the missing binding table entries? (Choose two.)",
                    options: [
                        { letter: "A", text: "DHCP client" },
                        { letter: "B", text: "source host" },
                        { letter: "C", text: "destination host" },
                        { letter: "D", text: "DHCP server" },
                        { letter: "E", text: "DHCP relay agent" },
                    ],
                    correct: ["C", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 204,
                    type: "multiple-choice",
                    image: "images/page99_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator redistributed the default static route into OSPF toward all internal routers to reach to lnternet.Which set of commands restores reachability to the lnternet by internal routers?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 205,
                    type: "multiple-choice",
                    image: "images/page99_img1.jpeg",
                    text: "Refer to the exhibit. After an engineer updates the configuration on the device, they noticed unexpected behavior. Which command resolves the issue by completely replacing the startup configuration?",
                    options: [
                        { letter: "A", text: "copy system:running-config nvram:startup-config" },
                        { letter: "B", text: "configure replace nvram:startup-config" },
                        { letter: "C", text: "copy running-config startup-config" },
                        { letter: "D", text: "copy running-config startup-config" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 206,
                    type: "multiple-choice",
                    text: "Which configuration meets the requirements for a customer site?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 207,
                    type: "multiple-choice",
                    image: "images/page100_img1.jpeg",
                    text: "Refer to the exhibit. While troubleshooting a BGP route reflector configuration, an engineer notices that reflected routes are missing from neighboring routers. Which two BGP configurations are needed to resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "neighbor R4 route-reflector-client" },
                        { letter: "B", text: "neighbor R2 route-reflector-client" },
                        { letter: "C", text: "neighbor 10.1.1.14 route-reflector-client" },
                        { letter: "D", text: "neighbor 10.1.1.2 allowas-in" },
                        { letter: "E", text: "neighbor 10.1.1.2 route-reflector-client" },
                    ],
                    correct: ["A", "B"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 208,
                    type: "multiple-choice",
                    image: "images/page100_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is troubleshooting an OSPF adjacency issue between directly connected routers R1 and R2. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 209,
                    type: "multiple-choice",
                    image: "images/page101_img1.jpeg",
                    text: "Refer to the exhibits. All the serial inks between R1, R2, and R3 have the same bandwidth. Users on the 192.168.1.0/24 network report slow response times while they access resources on network 192.168.3.0/24. When a traceroute is run on the path, it shows that the packet is getting forwarded via R2 to R3 although the link between R1 and R3 is still up. What must the network administrator do to fix the slowness?",
                    options: [
                        { letter: "A", text: "Redistribute the R1 static route to EIGRP." },
                        { letter: "B", text: "Change the Administrative Distance of EIGRP to 5." },
                        { letter: "C", text: "Add a static route on R1 using the next hop of R3." },
                        { letter: "D", text: "Remove the Static route on R1." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 210,
                    type: "multiple-choice",
                    image: "images/page102_img1.jpeg",
                    text: "Refer to the exhibit. R1 has a route map configured, which results in a loss of partial IPv6 prefixes for the BGP neighbor, resulting in service degradation. How can the full service be restored?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 211,
                    type: "multiple-choice",
                    image: "images/page102_img1.jpeg",
                    text: "Refer to the exhibit. Ah engineer is troubleshootiitg suboptimal communication from the 192.168.5.32/28 subnet to the 172.16.3.16/28 segment using the slowest links. Which configuration resolves the suboptimal routing issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 212,
                    type: "multiple-choice",
                    image: "images/page103_img1.jpeg",
                    text: "Refer to the exhibit. R10 attempts to copy an image file from R11 using TFTP, and the operation is timing out. Which action resoh/es the issue?",
                    options: [
                        { letter: "A", text: "R10 must be configured to belong to the same VRF TFTP." },
                        { letter: "B", text: "R11 requires the TFTP server command for the image to be set to the VRF TFTP." },
                        { letter: "C", text: "R11 requires the TFTP server source-interface to be set to GigabitEthernet0/0." },
                        { letter: "D", text: "Change R10 duplex to auto to resolve the duplex mismatch between routers R10 and R11." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 213,
                    type: "multiple-choice",
                    image: "images/page103_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration advertises more specific routes to R1 without sending a BGP summary route?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 214,
                    type: "multiple-choice",
                    image: "images/page103_img1.jpeg",
                    text: "Refer to the exhibit The remote branch locations have a static neighbor relationship configured to R1 only. R1 has successful neighbor relationships with the remote locations of R2 and R3, but the end users cannot communicate with each other. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 215,
                    type: "multiple-choice",
                    text: "A CoPP policy is applied for receiving SSH traffic from the WAN interface on a Cisco ISR4321 router. However, the SSH response from the router is abnormal and stuck during the high link utilization. The problem is identified as SSH traffic does not match in the ACL. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Rate-limit SSH traffic to ensure dedicated bandwidth." },
                        { letter: "B", text: "Increase the IP precedence value of SSH traffic to 6." },
                        { letter: "C", text: "Apply CoPP on the WAN interface inbound direction." },
                        { letter: "D", text: "Apply CoPP on the control plane interface." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 216,
                    type: "multiple-choice",
                    image: "images/page104_img1.jpeg",
                    text: "Refer to the exhibit. The company implemented uRPF to address an antispoofing attack. A network engineer received a call-from the if security department that the regional data center is under an IP spoofing attack. Which configuration must be implemented on R1 to resolve this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 217,
                    type: "multiple-choice",
                    image: "images/page105_img1.jpeg",
                    text: "Refer to the exhibit. Traffic from R3 to the central site does not use alternate paths when R3 cannot reach 10.10.10.2. Traffic on R3 destined to R4 takes an alternate route via 10.10.10.6 when 10.10.10.4 is not accessible from R3. Which configuration switches traffic destined 10 10.10.10.2 from R3 on the alternate path?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 218,
                    type: "multiple-choice",
                    text: "What does the MP-BGP OPEN message contain?",
                    options: [
                        { letter: "A", text: "IP routing information and the AS number to which the router belongs" },
                        { letter: "B", text: "NLRI, path attributes, and lP addresses of the sending and receiving routers" },
                        { letter: "C", text: "MPLS labels and the IP address of the router that receives the message" },
                        { letter: "D", text: "the version number and the AS number to which the router belongs" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 219,
                    type: "multiple-choice",
                    image: "images/page106_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must ensure that R3 sees only type 1 and 2 LSAs in area 1. Which command must the engineer apply on R2?",
                    options: [
                        { letter: "A", text: "area 1 stub" },
                        { letter: "B", text: "area 1 stub no-summary" },
                        { letter: "C", text: "area 1 stub nssa" },
                        { letter: "D", text: "area 1 nssa no-summary" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 220,
                    type: "multiple-choice",
                    image: "images/page106_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer received a call from the vendor for a failed attempt to remotely log in to their managed router loopback interface from 192.168.40.15. Which action must the network engineer take to resolve the issue?",
                    options: [
                        { letter: "A", text: "The ElGRP configuration must be updated to include a network statement for loopback 100." },
                        { letter: "B", text: "The source IP summarization must be updated to include the vendor source IP address." },
                        { letter: "C", text: "The time-range configuration must be changedto use absolute instead of periodic." },
                        { letter: "D", text: "The IP access list VENDOR must be applied to interface loopback 100." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 221,
                    type: "multiple-choice",
                    text: "Which label operations are performed by a label edge router?",
                    options: [
                        { letter: "A", text: "PUSH and PHP" },
                        { letter: "B", text: "SWAP and PUSH" },
                        { letter: "C", text: "PUSH and POP" },
                        { letter: "D", text: "SWAP and POP" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 222,
                    type: "multiple-choice",
                    image: "images/page107_img1.jpeg",
                    text: "Refer to the exhibit The network administrator configured redistribution on an ASBR to reach to all WAN networks but failed. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "The route map ElGRP->OSPF must have the 10.0.1 06.0/24 entry to exist in one of the three prefix lists to pass." },
                        { letter: "B", text: "The route map must have the keyword prefix-list to evaluate the prefix list entries." },
                        { letter: "C", text: "EIGRP must redistribute the 10.0.106.0/24 route instead of using the network statement." },
                        { letter: "D", text: "The OSPF process must have a metric when redistributing prefixes from EIGRP." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 223,
                    type: "multiple-choice",
                    image: "images/page108_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is investigating an OSPF issue reported by the Cisco DNA Assurance Center. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "An ACL entry blocking multicast on the interfaces. Allow multicast through the interface ACL." },
                        { letter: "B", text: "One of the neighbor links is down. Bring the interface up by running shut and no shut." },
                        { letter: "C", text: "One of the interfaces is using the wrong authentication. Match interface authentication on both links." },
                        { letter: "D", text: "One of the interfaces is using the wrong MTU. Match interfaceMTU on both links." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 224,
                    type: "multiple-choice",
                    image: "images/page108_img1.jpeg",
                    text: "Refer to the exhibit. R2 has two paths to reach 192.168.13.0/24, but traffic is sent only through R3.Which action allows traffic to use both paths?",
                    options: [
                        { letter: "A", text: "Configure the delay 1 command under interface FastEthernet0/0 on R2." },
                        { letter: "B", text: "Configure the variance 2 command under the EIGRP process on R2." },
                        { letter: "C", text: "Configure the variance 4 command under the EIGRP process on R2." },
                        { letter: "D", text: "Configure the bandwidth 2000 command under interface FastEthernet0/0 on R2." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 225,
                    type: "multiple-choice",
                    text: "ISE has gone down. The Network Administrator is not able to Telnet to R1 when ISE went down. Which two configuration changes will fix the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "aaa authentication login RAD-LOCAL group RAD-SERV local" },
                        { letter: "B", text: "line vty 0 4 login authentication default" },
                        { letter: "C", text: "line vty 0 4 login authentication RAD-SERV" },
                        { letter: "D", text: "aaa authentication login RAD-SERV group RAD-LOCAL local" },
                        { letter: "E", text: "line vty 0 4 login authentication RAD-LOCAL" },
                    ],
                    correct: ["A", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 226,
                    type: "multiple-choice",
                    text: "Which two components are required for MPLS Layer 3 VPN configuration? (Choose two.)",
                    options: [
                        { letter: "A", text: "Use OSPF between PE and CE." },
                        { letter: "B", text: "Use pseudowire for Layer 2 routes." },
                        { letter: "C", text: "Use MP-BGP for customer routes." },
                        { letter: "D", text: "Use LDP for customer routes." },
                        { letter: "E", text: "Use a unique RD per customer VRF" },
                    ],
                    correct: ["C", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 227,
                    type: "multiple-choice",
                    text: "Which configurations must the engineer apply to ROUTER_1 to restore connectivity for the affected devices?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 228,
                    type: "multiple-choice",
                    text: "What must a network architect consider for RTs when planning for a single customer full-mesh VPN in an MPLS Layer 3 network?",
                    options: [
                        { letter: "A", text: "RT must be globally unique within the same VPN." },
                        { letter: "B", text: "RT must be globally identical within the same VPN." },
                        { letter: "C", text: "RT values must be different from the RD values in the same VPN." },
                        { letter: "D", text: "Each RT value must be identical to an RD value within the same VPN." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 229,
                    type: "multiple-choice",
                    text: "Which IPv6 first-hop security feature helps to minimize denial of service attacks?",
                    options: [
                        { letter: "A", text: "lPV6 MAC address filtering" },
                        { letter: "B", text: "DHCPv6 Guard" },
                        { letter: "C", text: "IPv6 Router Advertisement Guard" },
                        { letter: "D", text: "IPv6 Destination Guard" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 230,
                    type: "multiple-choice",
                    text: "An engineer must configure a Cisco router to initiate secure connections from the router to other devices in the network but kept failing. Which two actions resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "Configure a domain name." },
                        { letter: "B", text: "Configure a source port for the SSH connection, to initiate." },
                        { letter: "C", text: "Configure transport input ssh command on the console." },
                        { letter: "D", text: "Configure a crypto key to be generated." },
                        { letter: "E", text: "Configure a TACACS+ server and enable it" },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 231,
                    type: "multiple-choice",
                    image: "images/page112_img1.jpeg",
                    text: "Refer to the exhibit. An engineer implemented an access list on R1 to allow anyone to Telnet except R2 Loopback0 to R1 Loopbackd. How must sequence 20 be replaced on the R1 access list to resolve the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 232,
                    type: "multiple-choice",
                    image: "images/page112_img1.jpeg",
                    text: "Refer to the exhibit. The 130.130.130.0/24 route shows in the R2 routing table but is getting filtering toward R3. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "The outgoing filter list for all interfaces must be set on R2." },
                        { letter: "B", text: "IGP synchronization must be disabled on R2." },
                        { letter: "C", text: "Automatic route summarization must be enabled on R2." },
                        { letter: "D", text: "The incoming filter list for all interfaces must be set on R2." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 233,
                    type: "multiple-choice",
                    text: "An engineer configured VRF-Lite on a router for VRF blue and VRF red. OSPF must be enabled on each VRF to peer to a directly connected router in each VRF. Which configuration forms OSPF neighbors overthe network 10.10.10.0/28 for VRF blue and 192.168.0.0/30 for VRF red?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 234,
                    type: "multiple-choice",
                    text: "Which feature is required for IPv6 Source Guard to block traffic arriving on the server interface from unknown sources?",
                    options: [
                        { letter: "A", text: "DHCPv6 Guard" },
                        { letter: "B", text: "Dynamic ARP Inspection" },
                        { letter: "C", text: "IPV6 ND Inspection" },
                        { letter: "D", text: "IPV6 RA Guard" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 235,
                    type: "multiple-choice",
                    image: "images/page113_img1.jpeg",
                    text: "Refer to the exhibit. Users are experiencing slow response times from critical application servers connected to the network. The engineer determined from the console log that there is a DoS attack on the interface GigaEthernet0/0. Which action must the engineer take to resolve the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 236,
                    type: "multiple-choice",
                    image: "images/page114_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured summarization for the R1 loopback addresses and failed. Which action permits the successful advertisement of the R1 loopback addresses?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 237,
                    type: "multiple-choice",
                    image: "images/page114_img1.jpeg",
                    text: "Refer to the exhibit. An engineer examines the BGP update for the IPv6 prefix 2001:db8::1/128, which should have been summarized into a /64 prefix- Which sequence of actions achieves the summarization?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 238,
                    type: "multiple-choice",
                    image: "images/page114_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured NetFlow to capture traffic information through the router, but it is not working as expected. Which action captures the flow information from this router to the collector?",
                    options: [
                        { letter: "A", text: "Configure a flow exporter under flow monitor FLOW-MONITOR-1." },
                        { letter: "B", text: "Change the flow exporter transport protocol from UDP to TCP." },
                        { letter: "C", text: "Configure more than one flow exporter destination addresses." },
                        { letter: "D", text: "Change the interface configuration FLOW-MONITOR-1 from input to output" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 239,
                    type: "multiple-choice",
                    image: "images/page115_img1.jpeg",
                    text: "Refer to the exhibit. SW100 cannot receive routes from R1. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 240,
                    type: "multiple-choice",
                    image: "images/page116_img1.jpeg",
                    text: "Refer to the exhibit. A customer reports that user traffic of bank XYZ to the AAA server is not using the primary path via the R3-R2 link The network team observes: 1. No fiber is cut on links R2 and R3. 2. AS101 and AS 201 routers established BGP peering. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 241,
                    type: "multiple-choice",
                    text: "The administrator cannot authenticate to R1 based on ISE. Which configuration fixes the issue?",
                    options: [
                        { letter: "A", text: "ip tacacs-sewer host 192.168.1.5 key Cisco123" },
                        { letter: "B", text: "line vty 0 4 login authentication telnet" },
                        { letter: "C", text: "line vty0 4 login authentication TAC-SERV" },
                        { letter: "D", text: "tacacs-server host 192.168.1.5 key Cisco123" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 242,
                    type: "multiple-choice",
                    image: "images/page117_img1.jpeg",
                    text: "Refer to the exhibit. AAA server 10.1.1.1 is configured with the default authentication and accounting settings, but the switch cannot communicate with the server. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Correct the timeout value" },
                        { letter: "B", text: "Match the authentication port" },
                        { letter: "C", text: "Match the accounting port" },
                        { letter: "D", text: "Correct the shared secret" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 243,
                    type: "multiple-choice",
                    image: "images/page117_img1.jpeg",
                    text: "Refer to the exhibit. When monitoring an IPv6 access list, an engineer notices that the ACL does not have any hits and is causing unnecessary traffic to pass through the interface. Which command must be configured to resolve the issue?",
                    options: [
                        { letter: "A", text: "access-class INTERNET in" },
                        { letter: "B", text: "ipv6 access-class INTERNET in" },
                        { letter: "C", text: "ipv6 traffic-filter INTERNET in" },
                        { letter: "D", text: "ip access-group lNTERNET in" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 244,
                    type: "multiple-choice",
                    image: "images/page118_img1.jpeg",
                    text: "Refer to the exhibit. An engineer implemented CoPP to limit Telnet traffic to protect the router CPU. It was noticed that the Telnet traffic did not pass through CoPP Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 245,
                    type: "multiple-choice",
                    image: "images/page118_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration allows the operation level 1 team of 10 engineers to log in at least three at a time to router R3 using network credentials over HTTP?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 246,
                    type: "multiple-choice",
                    image: "images/page119_img1.jpeg",
                    text: "Refer to the exhibit. The administrator is trying to overwrite an existing file on the TFTP server that was previously uploaded by another router. However, the attempt to update the file fails. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Make sure to run the TFTP service on the TFTP server." },
                        { letter: "B", text: "Make the TFTP folder writable by all on the TFTP server." },
                        { letter: "C", text: "Make the package.conf file executable by all on the TFTP server." },
                        { letter: "D", text: "Make the package.conf file writable by all on the TFTP server." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 247,
                    type: "multiple-choice",
                    text: "What is a function of an end device configured with DHCPv6 guard?",
                    options: [
                        { letter: "A", text: "If it is configured as a client, only DHCP requests are permitted." },
                        { letter: "B", text: "If it is configured as a server, only prefix assignments are permitted." },
                        { letter: "C", text: "lf it is configured as a relay agent, only prefix assignments are permitted." },
                        { letter: "D", text: "If it is configured as a client, messages are switched regardless of the assigned role." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 248,
                    type: "multiple-choice",
                    text: "Which Layer 3 VPN attribute installs customer routes in the VRF?",
                    options: [
                        { letter: "A", text: "RT" },
                        { letter: "B", text: "extended-community" },
                        { letter: "C", text: "RD" },
                        { letter: "D", text: "MPLS label" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 249,
                    type: "multiple-choice",
                    image: "images/page120_img1.jpeg",
                    text: "Refer to the exhibit. TCP traffic should be reaching host 10.10.10.10/24 via R2. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Add a permit 20 statement in the route map to allow TCP traffic." },
                        { letter: "B", text: "TCP traffic will reach the destination via R2 without any changes." },
                        { letter: "C", text: "Set lP next-hop to 10.10.12.2 under the route-map permit 10 to allow TCP traffic." },
                        { letter: "D", text: "Allow TCP in the access list with no changes to the route map." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 250,
                    type: "multiple-choice",
                    image: "images/page120_img1.jpeg",
                    text: "Refer to the exhibit. The network administrator can see the DHCP discovery packet in R1, but R2 is not replying to the DHCP request. The R1 related interface is configured with the DHCP helper address. If the PC is directly connected to the Fa0/1 interface on R2, the DHCP server assigns as IP address from the DHCP pool to the PC. Which two commands resolve this issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "ip dhcp relay information enable command on R1" },
                        { letter: "B", text: "service dhcp-relay command on R1" },
                        { letter: "C", text: "ip dhcp option 82 command on R2" },
                        { letter: "D", text: "ip dhcp relay Information trust-all command on R2" },
                        { letter: "E", text: "service dhcp command on R1" },
                    ],
                    correct: ["D", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 251,
                    type: "multiple-choice",
                    image: "images/page121_img1.jpeg",
                    text: "Refer to exhibit. A network engineer is facing issues between OSPF neighbors changing states frequently. The engineer enabled an ACL for CoPP and applied it at the control plane interface but got unexpected results. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 252,
                    type: "multiple-choice",
                    image: "images/page121_img1.jpeg",
                    text: "Refer to the exhibit. The network administrator configured the branch router for IPv6 on the E0/0 interface. The neighboring router is fully configured to meet requirements, but the neighbor relationship is not coming up. Which action fixes the problem on the branch router to bring the IPv6 neighbors up?",
                    options: [
                        { letter: "A", text: "Disable IPv6 on the E0/0 interface using the no ipv6 enable command." },
                        { letter: "B", text: "Enable the IPv4 address family under the E0/0 interface by using the address-family ipv4 unicast command." },
                        { letter: "C", text: "Enable the IPv4 address family under the router ospfv3 4 process by using the address-family ipv4 unicast command." },
                        { letter: "D", text: "Disable OSPE for IPv4 using the no ospfv3 4 area 0 ipv4command under the E0/0 interface." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 253,
                    type: "multiple-choice",
                    image: "images/page121_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must establish a point-to-point GRE VPN between R1 and the remote site. Which configuration accomplishes the task fort he remote site?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 254,
                    type: "multiple-choice",
                    text: "What are the two prerequisites to enable BFD on Cisco routers? (Choose two.)",
                    options: [
                        { letter: "A", text: "lP Cisco Express Forwarding and IP Routing must be enabled on all participating routers." },
                        { letter: "B", text: "UDP port 1985 must be allowed on all participating routers." },
                        { letter: "C", text: "ICMP must be allowed on all participating routers." },
                        { letter: "D", text: "A supported IP routing protocol must be configured on the participating routers." },
                        { letter: "E", text: "OSPF Demand Circuit must run BFD on all participating routers." },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 255,
                    type: "multiple-choice",
                    image: "images/page122_img1.jpeg",
                    text: "Refer to the exhibit. The network administrator configured VRF lite for customer A. The technicianiat the remote site misconfigured VRF on the router. Which configuration will resolve connectivity for both sites of customer_a?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 256,
                    type: "multiple-choice",
                    image: "images/page123_img1.jpeg",
                    text: "Refer to the exhibit. Users in VLAN46 cannot get the IP from the DHCP server. Assume that al the parameters are configured properly in VLAN 10 and on the DHCP server. Which command on interface VLAN46 allows users to receive IP from the DHCP server?",
                    options: [
                        { letter: "A", text: "ip dhcp relay information trust-all" },
                        { letter: "B", text: "ip dhcp server 10.221.10.10" },
                        { letter: "C", text: "ip helper-address 10.221.10.10" },
                        { letter: "D", text: "ip dhcp-address 10.221.10.10" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 257,
                    type: "multiple-choice",
                    image: "images/page123_img1.jpeg",
                    text: "Refer to the exhibit. The IT router has been configured with the Science VRF and the interfaces have been assigned to the VRE. Which set of configurations advertises Science-1 and Science-2 routes using ElGRP AS 111?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 258,
                    type: "multiple-choice",
                    text: "Which configuration accomplishes the task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 259,
                    type: "multiple-choice",
                    image: "images/page125_img1.jpeg",
                    text: "Refer to the exhibit. Not all connected and static routes of router B are received by router A even though EIGRP neighborship is established between the routers. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 260,
                    type: "multiple-choice",
                    image: "images/page126_img1.jpeg",
                    text: "Refer to the exhibit. An engineef must establish optimal routing between the app servers connected at the SPOKE routers. Which configurations are required on each router to create a distributed mapping database between SPOKE1 and SPOKE2 to achieve optimal routing so the traffic is forwarded directly from the App1 server to the App2 server?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 261,
                    type: "multiple-choice",
                    text: "Users report web connectivity problems on the server (10.1.1.10). Which IP SLA configuration captures the failure details through the network to resolve the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 262,
                    type: "multiple-choice",
                    image: "images/page128_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is trying to add an encrypted user password that should not be visible in the router configuration. Which two configuration commands resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "username Admin secret Cisco@123" },
                        { letter: "B", text: "no service password-encryption" },
                        { letter: "C", text: "password encryption aes" },
                        { letter: "D", text: "username Admin password Cisco@123" },
                        { letter: "E", text: "username Admin password 5 Cisco@123 F. service password-encryption" },
                    ],
                    correct: ["D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 263,
                    type: "multiple-choice",
                    image: "images/page128_img1.jpeg",
                    text: "Refer to the exhibit. The default route from R1 must be withdrawn from the routing table if R1 cannot ping 10.1.1.1, but it is not working correctly. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 264,
                    type: "multiple-choice",
                    image: "images/page129_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator must block ping from user 3 to the App Server only. An inbound standard access list is applied to R1 interface G0/0 to block ping. The network administrator was notified that user 3 cannot even ping user 9 anymore. Where must the access list be applied in the outgoing direction to resolve the issue?",
                    options: [
                        { letter: "A", text: "R2 interface G1/0" },
                        { letter: "B", text: "SW1 interface G1/10" },
                        { letter: "C", text: "R2 interface G0/0" },
                        { letter: "D", text: "SW1 interface G2/21" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 265,
                    type: "multiple-choice",
                    text: "A network engineer must configure a DMVPN network so that a spoke establishes a direct path to another spoke if the two must send traffic to each other. A spoke must send traffic directty to the hub if required. Which configuration meets this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 266,
                    type: "multiple-choice",
                    image: "images/page131_img1.jpeg",
                    text: "Refer to the exhibit. SW303 connects to 3 CSR via VLAN10. The CSR is also an EIGRP neighbor to SW303. After enabling BFD on the CSR and SW303, an engineer notices the absence of stats related to BFD on SW303. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the bfd l2cos 0 command." },
                        { letter: "B", text: "Configure the bfd interval 500 min_rx 500 multiplier 5 command on a physical interface." },
                        { letter: "C", text: "Configure the bfd all-interfaces command under EIGRP for AS 88." },
                        { letter: "D", text: "Configure the bid interface vlan 10 command under EIGRP for AS 88" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 267,
                    type: "multiple-choice",
                    text: "Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 268,
                    type: "multiple-choice",
                    image: "images/page132_img1.jpeg",
                    text: "Refer to the exhibit. A NOC team receives a ticket that data traffic from RA to RF is not fomarded when the link between the RC-RE path goes down. All routers team loopback IP through the IGP protocol. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 269,
                    type: "multiple-choice",
                    image: "images/page132_img1.jpeg",
                    text: "Refer to the exhibit. An engineer is troubleshooting a prefix advertisement issue from R3, which is not directly connected to R1. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 270,
                    type: "multiple-choice",
                    text: "How does the swap operation perform in an MPLS core?",
                    options: [
                        { letter: "A", text: "It happens at the ingress LSR when the label stack is first imposed on the packet." },
                        { letter: "B", text: "It goes hop-by-hop through the LSP with a new label at each P router." },
                        { letter: "C", text: "It load balances traffic when multiple paths exist to the destination." },
                        { letter: "D", text: "It switches the LSP used to forward traffic when a link fails." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 271,
                    type: "multiple-choice",
                    text: "An engineer configured a leak-map command to summarize EIGRP routes and advertise specifically loopback 0 with an IP of 10.1.1.1 255.255.255.252 along with the summary route. After finishing configuration, the customer complained not receiving summary route with specific loopback address. Which two configurations will fix it? (Choose two.)",
                    options: [
                        { letter: "A", text: "route-map Leak-Route permit 10 and match access-list 1." },
                        { letter: "B", text: "access-list 1 permit 10.1.1.1 0.0.0.252." },
                        { letter: "C", text: "access-list 1 and match under route map Leak-Route." },
                        { letter: "D", text: "access-list 1 permit 10.1.1.0 0.0.0.3." },
                        { letter: "E", text: "route-map Leak-Route permit 20." },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 272,
                    type: "multiple-choice",
                    image: "images/page133_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator configured an IPv6 access list to allow TCP return traffic only, but it is not working as expected. Which changes resolve this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 273,
                    type: "multiple-choice",
                    text: "An engineer is trying to copy an IOS file from one router to another router by using TFTP. Which two actions are needed to allow the file to copy? (Choose two.)",
                    options: [
                        { letter: "A", text: "TFTP is not supported in recent IOS versions, so an alternative method must be used." },
                        { letter: "B", text: "Enable the TFTP server on the source router with the tftp-server flash: <filename> command." },
                        { letter: "C", text: "Configure a user on the source router with the username tftp password tftp command." },
                        { letter: "D", text: "Copy the file to the destination router with the copy tftp: flash: command." },
                        { letter: "E", text: "Configure the TFTP authentication on the source router with the tftp-server authentication local command." },
                    ],
                    correct: ["B", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 274,
                    type: "multiple-choice",
                    image: "images/page134_img1.jpeg",
                    text: "Refer to the exhibit. R1 cannot authenticate via TACACS. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 275,
                    type: "multiple-choice",
                    image: "images/page134_img1.jpeg",
                    text: "Refer to the exhibit. HostA and HostB cannot receive IP addresses from the DHCP server. The switches are configured with the DHCP snooping. Which configuration on SW3 resolves the issue?",
                    options: [
                        { letter: "A", text: "ip helper-address 1.0.0.2" },
                        { letter: "B", text: "no ip dhcp snooping information option" },
                        { letter: "C", text: "ip dhcp relay information option-insert" },
                        { letter: "D", text: "ip dhcp server use subscriber-id client-id" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 276,
                    type: "multiple-choice",
                    image: "images/page135_img1.jpeg",
                    text: "Refer to the exhibit. The administrator configured route advertisement to a remote low resources router to use only the default route to reach any network but failed. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Change the direction of the distribute-list command from out to in." },
                        { letter: "B", text: "Remove the prefix keyword from the distribute-list command." },
                        { letter: "C", text: "Remove the line with the sequence number 10 from the prefix list." },
                        { letter: "D", text: "Remove the line with the sequence number 5 from the prefix list." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 277,
                    type: "multiple-choice",
                    image: "images/page136_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator logs into the router using TACACS+ username and password credentials, but the administrator cannot run any privileged commands. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure an authorized IP address for this user to access this router" },
                        { letter: "B", text: "Configure full access for the username from TACACS+ server" },
                        { letter: "C", text: "Configure TACACS+ synchronization with the Active Directory admin group." },
                        { letter: "D", text: "Configure the username from a local database." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 278,
                    type: "multiple-choice",
                    image: "images/page136_img1.jpeg",
                    text: "Refer to the exhibit. An administrator must configure the router with OSPF for IPv4 and IPv6 networks under a single process. The OSPF adjacencies are not established and did not meet the requirement. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 279,
                    type: "multiple-choice",
                    text: "An engineer configured Reverse Path Forwarding on an interface and noticed that the routes are dropped when a route lookup fails on that interface for a prefix that is available in the routing table. Which interface configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "ip verify unicast source reachable-via l2-src" },
                        { letter: "B", text: "ip verify unicast source reachable-via any" },
                        { letter: "C", text: "ip verify unicast source reachable-via rx" },
                        { letter: "D", text: "ip verify unicast source reachable-via allow-default" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 280,
                    type: "multiple-choice",
                    image: "images/page137_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured IP SLA on R1 to avoid the ISP link flapping problem, but it is not working as designed. lP SLA should wait 30 seconds before switching traffic to a secondary connection and then revert to the primary link after waiting 20 seconds, when the primary link is available and stabilized. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 281,
                    type: "multiple-choice",
                    image: "images/page137_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer notices that the configured track option is down. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "ip sla schedule 10 no threshold" },
                        { letter: "B", text: "ip sla schedule 10 no timeout" },
                        { letter: "C", text: "ip sla schedule 10 start-time now" },
                        { letter: "D", text: "ip sla schedule 10 start-time pending life forever" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 282,
                    type: "multiple-choice",
                    image: "images/page138_img1.jpeg",
                    text: "Refer to the exhibit. Spoke routers do not learn about each other’s routes in the DMVPN Phase2 network. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Rectify incorrect wrldcard mask configured on the hub router network command." },
                        { letter: "B", text: "Remove default route from spoke routers to establish a spoke-to-spoke tunnel." },
                        { letter: "C", text: "Disable EIGRP split horizon on the Tunnel0 interface of the hub router." },
                        { letter: "D", text: "Configure a static route in each spoke to establish a spoke-to-spoke tunnel." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 283,
                    type: "multiple-choice",
                    image: "images/page138_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configured NetFlow on R1, but the NMS server cannot see the flow from ethemet 0/0 of R1. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 284,
                    type: "multiple-choice",
                    text: "Users report issues with reachability between areas as soon as an engineer configured summary routes between areas in a multiple area OSPF autonomous system. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the area range command on the ABR" },
                        { letter: "B", text: "Configure the area range command on the ASBR" },
                        { letter: "C", text: "Configure the summary-address command on the ASBR." },
                        { letter: "D", text: "Configure the summary-address command on the ABR." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 285,
                    type: "multiple-choice",
                    text: "What is an advantage of using BFD?",
                    options: [
                        { letter: "A", text: "It detects local link failure at layer 1 and updates routing table." },
                        { letter: "B", text: "It has sub-second failure detection for layer 1 and layer 3 problems." },
                        { letter: "C", text: "It detects local link failure at layer 3 and updates routing protocols." },
                        { letter: "D", text: "It has sub-second failure detection for layer 1 and layer 2 problems" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 286,
                    type: "multiple-choice",
                    text: "Which characteristic is representative of a hub-and-spoke topology between PE routers in a Layer 3 MPLS VPN network?",
                    options: [
                        { letter: "A", text: "The PE routers use different RDs for each VRF to import and export M-BGP prefixes." },
                        { letter: "B", text: "Each PE router uses a different RD to identify all branches." },
                        { letter: "C", text: "The PE routers are configured with multiple VRFs for all branches." },
                        { letter: "D", text: "The PE routers use different RTs to import and export M-BGP prefixes." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 287,
                    type: "multiple-choice",
                    image: "images/page139_img1.jpeg",
                    text: "Refer to the exhibit. Router R1 needs an access list to stop the client machines to file transfer toward the WAN. The router has an access list that is not working as desired. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 288,
                    type: "multiple-choice",
                    image: "images/page140_img1.jpeg",
                    text: "Refer to the exhibit. Troubleshoot and ensure that branch B only ever uses the MPLS B network to reach HQ. Which action achieves this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 289,
                    type: "multiple-choice",
                    image: "images/page141_img1.jpeg",
                    text: "Refer to the exhibit. AS102 and AS103 are advertising the prefix 2001::db8::abce::/64 with the default attribute to R1. Which action selects AS103 as a primary path for the prefix on R1 instead of AS102?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 290,
                    type: "multiple-choice",
                    text: "Which failure detection mechanism is used for BFD?",
                    options: [
                        { letter: "A", text: "consistent rate" },
                        { letter: "B", text: "Layer 2 protocol failure" },
                        { letter: "C", text: "variable rate" },
                        { letter: "D", text: "routing protocol failure" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 291,
                    type: "multiple-choice",
                    text: "Which feature is used by LDP in the forwarding path within the MPLS cloud?",
                    options: [
                        { letter: "A", text: "lP forwarding" },
                        { letter: "B", text: "LSP" },
                        { letter: "C", text: "TTL" },
                        { letter: "D", text: "TDP" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 292,
                    type: "multiple-choice",
                    image: "images/page142_img1.jpeg",
                    text: "Refer to the exhibit. A prefix list is created to filer routes inbound to an ElGRP process except for network 10 prefixes. After the prefix list is applied, no network 10 prefixes are visible in the routing table from ElGRP. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 293,
                    type: "multiple-choice",
                    text: "How is VPN routing information distributed in an MPLS network?",
                    options: [
                        { letter: "A", text: "It is controlled using of VPN target communities." },
                        { letter: "B", text: "It is established using VPN lPsec peers." },
                        { letter: "C", text: "The top level of the customer data packet directs it to the correct CE device." },
                        { letter: "D", text: "It is controlled through the use of RD." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 294,
                    type: "multiple-choice",
                    text: "Which tag is used by the PE router to forward the packet to the correct customer?",
                    options: [
                        { letter: "A", text: "VNI" },
                        { letter: "B", text: "extended-community" },
                        { letter: "C", text: "RT" },
                        { letter: "D", text: "RD" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 295,
                    type: "multiple-choice",
                    image: "images/page142_img1.jpeg",
                    text: "Refer to the exhibit. An engineer applied an IPv6 traffic filter on R1. The interface flapped between R1 and R2 and clearing the BGP session did not restore the BGP session and failed. Which action must the engineer take to restore the BGP session from R2 to R1?",
                    options: [
                        { letter: "A", text: "Apply the IPv6 traffic filter in the outbound direction on the interface." },
                        { letter: "B", text: "Swap the source and destination IP addresses in the IPv6 traffic filter." },
                        { letter: "C", text: "ICMPv6 must be permitted by the IPv6 traffic filter." },
                        { letter: "D", text: "Enable the BGP session, which went down when the session was cleared." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 296,
                    type: "multiple-choice",
                    text: "Which ElGRP configuration command resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 297,
                    type: "multiple-choice",
                    text: "Which transport layer protocol is used to form LDP sessions?",
                    options: [
                        { letter: "A", text: "RDP" },
                        { letter: "B", text: "SCTP" },
                        { letter: "C", text: "TCP" },
                        { letter: "D", text: "UDP" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 298,
                    type: "multiple-choice",
                    text: "Which two components are needed for a service provider to utilize the L3VPN MPLS application? (Choose two.)",
                    options: [
                        { letter: "A", text: "The P routers must be configured with RSVP." },
                        { letter: "B", text: "The PE routers must be configured for MP-eBGP to connect to CEs." },
                        { letter: "C", text: "The PE routers must be configured for MP-iBCP with other PE routers." },
                        { letter: "D", text: "The P and PE routers must be configured with LDP or RSVP." },
                        { letter: "E", text: "The P routers must be configured for MP-iBGP toward the PE routers." },
                    ],
                    correct: ["C", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 299,
                    type: "multiple-choice",
                    image: "images/page144_img1.jpeg",
                    text: "Refer to the exhibit. PC2 is directly connected to R1. A user at PC2 cannot Telnet to 2001:db8:a:b:10. The user can ping 2001:db8:a:b:10 and receive DHCP- related information from the DHCP server. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Remove sequence 30 and put it back as sequence 5." },
                        { letter: "B", text: "Remove sequence 20 and put it back as sequence 45." },
                        { letter: "C", text: "Remove sequence 40 and put it back as sequence 15." },
                        { letter: "D", text: "Remove sequence 10 and put it back as sequence 25." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 300,
                    type: "multiple-choice",
                    image: "images/page145_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration resolves the IP SLA issue from R1 to the server?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 301,
                    type: "multiple-choice",
                    text: "What is the forwarding mechanism in MPLS VPN?",
                    options: [
                        { letter: "A", text: "Label forwarding across the provider backbone is based on static label switching or static defined paths" },
                        { letter: "B", text: "A provider edge (PE) device binds a label to all customer prefixes learned from a customer edge (CE) device and includes the label for the prefix that advertises to other PE devices." },
                        { letter: "C", text: "A customer packet is encapsulated with a stack of three labels when traversing the MPLS backbone from one end of CE to another CE device." },
                        { letter: "D", text: "The top label determines how that PE device should forward the packet to the CE device and the second label directs the packet to the correct PE device." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 302,
                    type: "multiple-choice",
                    image: "images/page145_img1.jpeg",
                    text: "Refer to the exhibit. Which action ensures that 10.10.10.0/24 reaches 10.10.20.0/24 through the direct link between R1 and R2?",
                    options: [
                        { letter: "A", text: "Configure R1 and R2 LAN links as nonpassive." },
                        { letter: "B", text: "Configure OSPF path cost to 3 between R1 and R2." },
                        { letter: "C", text: "Configure OSPF link cost to 1 between R1 and R2." },
                        { letter: "D", text: "Configure R1 and R2 links under area 1." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 303,
                    type: "multiple-choice",
                    image: "images/page146_img1.jpeg",
                    text: "Refer to the exhibit. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Establish connectivity between the NTP server and Cisco DNA Center." },
                        { letter: "B", text: "Configure the local time on Cisco DNA Center." },
                        { letter: "C", text: "Establish connectivity between the NTP server and the switch." },
                        { letter: "D", text: "Configure the local time on the SW1 device." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 304,
                    type: "multiple-choice",
                    image: "images/page146_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must filter prefixes that originate from AS65412, but it is not working correctly. Which configuration must the engineer apply to R1 to resolve the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 305,
                    type: "multiple-choice",
                    image: "images/page147_img1.jpeg",
                    text: "Refer to the exhibit. R1 uses SP1 as the primary path. A network engineer must force all SSH traffic generated from R1 toward SP2. Which configuration accomplishes the task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 306,
                    type: "multiple-choice",
                    image: "images/page147_img1.jpeg",
                    text: "Refer to the exhibit. An engineer tried to access the Cisco WS-C6513 core switch but failed. Which protocol resolves the issue?",
                    options: [
                        { letter: "A", text: "HTTP version 2" },
                        { letter: "B", text: "SCP version 2" },
                        { letter: "C", text: "SNMP version 2" },
                        { letter: "D", text: "SSH Version 2" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 307,
                    type: "multiple-choice",
                    image: "images/page148_img1.jpeg",
                    text: "Refer to the exhibit. Branch 2 hosts cannot receive dynamic IP addresses. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the ip helper command on the interface GigabitEthernet 0/2 of the DHCP router." },
                        { letter: "B", text: "Configure the ip helper command on the interface GigabitEthernet 0/2 of the R2 router." },
                        { letter: "C", text: "Configure the ip helper command on the Layer 2 switch SW2 interfaces." },
                        { letter: "D", text: "Configure the ip helper command on the interface GigabitEthernet 0/0 of the DHCP router." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 308,
                    type: "multiple-choice",
                    image: "images/page149_img1.jpeg",
                    text: "Refer to the exhibit. An administrator must harden a router, but the administrator failed to test the SSH access successfully to the router. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure SSH on the remote device to log in using SSH." },
                        { letter: "B", text: "SSH syntax must be ssh -I user ip to log in to the remote device." },
                        { letter: "C", text: "SSH must be allowed with the transport output ssh command." },
                        { letter: "D", text: "Configure enable secret to log in to the device." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 309,
                    type: "multiple-choice",
                    image: "images/page149_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator is using the DNA Assurance Dashboard panel to troubleshoot an OSPF adjacency that failed between Edge NYC interface GigabitEthernet1/3 with Neighbor Edge_SNJ. The administrator observes that the neighborship is stuck in exstart state. How does the administrator fix this issue?",
                    options: [
                        { letter: "A", text: "Configure to match the OSPF interface unique IP address and subnet mask on both routers." },
                        { letter: "B", text: "Configure to match the OSPF interface speed and duplex settings on both routers" },
                        { letter: "C", text: "Configure to match the OSPF interface network types on both routers." },
                        { letter: "D", text: "Configure to match the OSPF interface MTU settings on both routers" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 310,
                    type: "multiple-choice",
                    image: "images/page150_img1.jpeg",
                    text: "Refer to the exhibit. Which two configurations allow clients to get dynamic IP addresses assigned? (Choose two.)",
                    options: [
                        { letter: "A", text: "Configure access-list 100 permit udp any any eq 67 as the first line." },
                        { letter: "B", text: "Configure access-list 100 permit udp any any eq 69 as the first line." },
                        { letter: "C", text: "Configure access-list 100 permit udp any any eq 66 as the first line." },
                        { letter: "D", text: "Configure access-list 100 permit udp any any eq 68 as the first line." },
                        { letter: "E", text: "Configure access-list 100 permit udp any any eq 61 as the first line." },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 311,
                    type: "multiple-choice",
                    image: "images/page150_img1.jpeg",
                    text: "Refer to the exhibit. The engineer is trying to transfer the new lOS file to the router R3 but is getting an error. Which configuration achieves the file transfer?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 312,
                    type: "multiple-choice",
                    text: "What is the purpose of an OSPF sham-link?",
                    options: [
                        { letter: "A", text: "to allow intra-area routing when OSPF is used as the PE-CE connection protocol in an MPLS VPN network" },
                        { letter: "B", text: "to correct OSPF backdoor routing when OSPF is used as the PE-PE connection protocol in an MPLS VPN network" },
                        { letter: "C", text: "to correct OSPF backdoor routing when OSPF is used as the PE-CE connection protocol in an MPLS VPN network" },
                        { letter: "D", text: "to allow inter-area routing when OSPF is used as the PE-CE connection protocol in a MPLS VPN network" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 313,
                    type: "multiple-choice",
                    image: "images/page152_img1.jpeg",
                    text: "Refer to the exhibit. AS 111 wanted to use AS 200 as the preferred path for 172.20.5.0/24 and AS 100 as the backup. After the configuration, AS 100 is not used for any other routes. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 314,
                    type: "multiple-choice",
                    image: "images/page152_img1.jpeg",
                    text: "Refer to the exhibit. An engineer configures DMVPN and receives the hub location prefix of 10.1.1.0/24 on R2 and R3. The R3 prefix of 10.13.0/24 is not received on R2, and the R2 prefix 10.1.2.0/24 is not received on R3. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 315,
                    type: "multiple-choice",
                    text: "How are CE advertised routes segmented from other CE routers on an MPLS PE router?",
                    options: [
                        { letter: "A", text: "by pushing MPLS labels advertised by LDP on customer routes" },
                        { letter: "B", text: "by enabling multiple instances of BGP, one for each CE router" },
                        { letter: "C", text: "by assigning CE-facing interfaces to different VRFs" },
                        { letter: "D", text: "with a combination of VRF-Lite and MP-BGP" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 316,
                    type: "multiple-choice",
                    text: "How are CE advertised routes segmented from other CE routers on an MPLS PE router?",
                    options: [
                        { letter: "A", text: "by pushing MPLS labels advertised by LDP on customer routes" },
                        { letter: "B", text: "by enabling multiple instances of BGP, one for each CE router" },
                        { letter: "C", text: "by assigning CE-facing interfaces to different VRFs" },
                        { letter: "D", text: "with a combination of VRF-Lite and MP-BGP" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 317,
                    type: "multiple-choice",
                    image: "images/page153_img1.jpeg",
                    text: "Refer to the exhibit. Alter recovering from a power failure, Ethernet0/1 stayed down while Ethernet0/0 returned to the up/up state. The default route through ISP1 was not reinstated in the routing table until Ethernet0/1 also came up. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Remove the references to the interface names from both static default routes." },
                        { letter: "B", text: "Reference the track object 1 in ,both static, default routes." },
                        { letter: "C", text: "Add a static route to the 8.8.8.8/32 destination through, the next hop 203.0.113.1." },
                        { letter: "D", text: "Configure the default route through ISP 1 with a higher administrative distance than 2." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 318,
                    type: "multiple-choice",
                    image: "images/page154_img1.jpeg",
                    text: "Refer to the exhibit. The primary link between R1 and R2 went down, but R3 is still advertising the 192.168.200.0/24 network to R1 and the 192.168.100.0/24 network to R2, which creates a loop. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the eigrp stub command under the EIGRP process on R2." },
                        { letter: "B", text: "Configure the eigrp stub command under the EIGRP process on R3." },
                        { letter: "C", text: "Configure the summary-address 192.168.0.0 255.255.0.0 100 command on R3." },
                        { letter: "D", text: "Configure the eigrp stub leak-map command under the EIGRP process on R1." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 319,
                    type: "multiple-choice",
                    image: "images/page154_img1.jpeg",
                    text: "Refer to the exhibit. R3 is dual-homed to two service providers for traffic redundancy. R3 prefers its outbound traffic via R2. Which set of configurations achieves this goal?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 320,
                    type: "multiple-choice",
                    text: "A policy is required that overrides normal routing behavior. If the web traffic is sent to a destination of 10.200.200.0/24 and the route is withdrawn from the routing table of a router under this condition, the policy that is applied in the ingress direction on the interface must direct traffic to a next hop of 10.2.2.2. If the route is present in the routing table, then normal forwarding must occur for web traffic. Which configuration meets the requirements?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 321,
                    type: "multiple-choice",
                    text: "Which type of ports are protected by IPv6 Source Guard?",
                    options: [
                        { letter: "A", text: "Layer 2 ports" },
                        { letter: "B", text: "access ports" },
                        { letter: "C", text: "trunk ports" },
                        { letter: "D", text: "Layer 3 ports" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 323,
                    type: "multiple-choice",
                    text: "Which OSI model is used to insert an MPLS label?",
                    options: [
                        { letter: "A", text: "between Layer 5 and Layer 6" },
                        { letter: "B", text: "between Layer 3 and Layer 4" },
                        { letter: "C", text: "between Layer 1 and Layer 2" },
                        { letter: "D", text: "between Layer 2 and Layer 3" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 324,
                    type: "multiple-choice",
                    image: "images/page156_img1.jpeg",
                    text: "Refer to the exhibit. A customer reports that networks in the 10.0.1.0/24 space do not appear in the RIP database. What action resolves the issue?",
                    options: [
                        { letter: "A", text: "Permit 10.0.1.0/24 address in the ACL." },
                        { letter: "B", text: "Remove ACL on R1 blocking 10.0.1.0/24 network." },
                        { letter: "C", text: "Configure 10.0.1.0/24 network under RIP" },
                        { letter: "D", text: "Remove summarization of 10.0.0.0/8." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 325,
                    type: "multiple-choice",
                    text: "While BGP internet routes are redistributed to a lower class of router via RIP, packets are being dropped and routes are failing to be distributed in RIP. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Use the input-queue command to prevent the loss of packets" },
                        { letter: "B", text: "Use RIP V2 to be able to use classless networks from BGP." },
                        { letter: "C", text: "Use WFQ in the output queue of the high-perfomiance router." },
                        { letter: "D", text: "Use OSPF instead of RIP to accept all BGP routes." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 326,
                    type: "multiple-choice",
                    image: "images/page156_img1.jpeg",
                    text: "Refer to the exhibit. Routers R1, R2, R3, and R4 use EIGRP. However, traffic always prefers R1 to R5 backup links in nonfailure scenarios. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 327,
                    type: "multiple-choice",
                    image: "images/page156_img1.jpeg",
                    text: "Refer to the exhibit. Router ABR-Rtr is not propagating the internet routes in OSPF area 10, which causes internet reachability problems in the area. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "ABR-Rtr must configure the default-information originate always command" },
                        { letter: "B", text: "ABR-Rtr must advertise the 0.0.0.0/0 default route in area 10." },
                        { letter: "C", text: "ABR-Rtr must configure the area 10 stub no-summary command." },
                        { letter: "D", text: "ABR-Rtr network type must be broadcast network" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 328,
                    type: "multiple-choice",
                    text: "An engineer must configure encrypted packets for a single router OSPF neighborship. Which configuration meets this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 329,
                    type: "multiple-choice",
                    image: "images/page157_img1.jpeg",
                    text: "Refer to the exhibit. The Math and Science departments connect through the corporate IT router, but users in the Math department must not be able to reach the Science department and vice versa. Which configuration accomplishes this task?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 330,
                    type: "multiple-choice",
                    image: "images/page158_img1.jpeg",
                    text: "Refer to the exhibit. The remote server is failing to receive the NetFlow data. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Modify the flow transport command transport udp 2055 to move under flow monitor profile." },
                        { letter: "B", text: "Modify the flow record command record v4_rl to move under flow exporter profile." },
                        { letter: "C", text: "Modify the udp port under flow exporter profile to lp transport udp 4739." },
                        { letter: "D", text: "Modify the interface command to ip flow monitor FLOW-MONlTOR-1 input." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 331,
                    type: "multiple-choice",
                    image: "images/page159_img1.jpeg",
                    text: "Refer to the exhibit. A user has set up an IP SLA probe to test if a non SLA host web server on IP address 10.1.1.1 accepts HTTP sessions prior to deployment. The probe is failing. Which action should the network administrator recommend for the probe to succeed?",
                    options: [
                        { letter: "A", text: "Add icmp-echo command for the host." },
                        { letter: "B", text: "Modify the ip sla schedule frequency to forever." },
                        { letter: "C", text: "Add the control disable option to the tcp connect." },
                        { letter: "D", text: "Re-issue the ip sla schedule command." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 332,
                    type: "multiple-choice",
                    text: "A network administrator is troubleshooting a failed AAA login issue on a Cisco Catalyst c3560 switch. When the network administrator tries to log in with SSH using TACACS+ username and password credentials, the switch is no longer authenticating and is failing back to the local account. Which action resolves this issue?",
                    options: [
                        { letter: "A", text: "Configure ip tacacs source-interface GigabitEthernet 1/1." },
                        { letter: "B", text: "Configure ip tacacs source-ip 192.168.100.55." },
                        { letter: "C", text: "Configure ip tacacs-server source-interface GigabitEthernet 1/1." },
                        { letter: "D", text: "Configure ip tacacs-server source-ip 192.168.100.55." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 333,
                    type: "multiple-choice",
                    image: "images/page160_img1.jpeg",
                    text: "Refer to the exhibit. Which action adds the 10.1.7.6/32 route to the BGP table?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 334,
                    type: "multiple-choice",
                    text: "What is the failure detection time with BFD?",
                    options: [
                        { letter: "A", text: "3 seconds" },
                        { letter: "B", text: "less than a second" },
                        { letter: "C", text: "1 second" },
                        { letter: "D", text: "2 seconds" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 335,
                    type: "multiple-choice",
                    image: "images/page161_img1.jpeg",
                    text: "Refer to the exhibit. An IT staff member comes into the office during normal office hours and cannot access devices through SSH. Which action should be taken to resotve this issue?",
                    options: [
                        { letter: "A", text: "Configure the access list in the outbound direction." },
                        { letter: "B", text: "Modify the access list to correct the subnet mask." },
                        { letter: "C", text: "Configure the correct time range." },
                        { letter: "D", text: "Modify the access list to use the correct IP address." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 336,
                    type: "multiple-choice",
                    image: "images/page161_img1.jpeg",
                    text: "Refer to the exhibit. A user cannot SSH to the router. What action must be taken to resolve this issue?",
                    options: [
                        { letter: "A", text: "Configure ip ssh version 2" },
                        { letter: "B", text: "Configure transport input ssh" },
                        { letter: "C", text: "Configure transport output ssh" },
                        { letter: "D", text: "Configure ip ssh source-interface toopback0" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 337,
                    type: "multiple-choice",
                    image: "images/page162_img1.jpeg",
                    text: "Refer to the exhibit. A bank ATM site has difficulty connecting with the bank server. A network engineer troubleshoots the issue and finds that R4 has no active route to the bank ATM site. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "ElGRP peering between R3 and R4 to be fixed." },
                        { letter: "B", text: "Advertise 10.10.30.0/24 subnet in R3 ElGRP AS." },
                        { letter: "C", text: "Advertise 10.10.30.0/24 subnet in R1 ElGRPAS." },
                        { letter: "D", text: "ElGRP peering between R1 and R2 to befixed." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 338,
                    type: "multiple-choice",
                    text: "How does LDP operate in an MPLS network?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 339,
                    type: "multiple-choice",
                    image: "images/page163_img1.jpeg",
                    text: "Refer to the exhibit. An engineer has configured policy-based routing and applied the configuration to the correct interface. How is the configuration applied to the traffic that matches the access list?",
                    options: [
                        { letter: "A", text: "It is sent to 209.165.202.129." },
                        { letter: "B", text: "It is dropped." },
                        { letter: "C", text: "It is sent to 209.165.202.131." },
                        { letter: "D", text: "It is forwarded using the routing table lookup." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 340,
                    type: "multiple-choice",
                    image: "images/page163_img1.jpeg",
                    text: "Refer to the exhibit. Customer B has decided not to receive any routes from R1 that originated outside the AS 100. Which AS path access list must the engineer choose to meet this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 341,
                    type: "multiple-choice",
                    image: "images/page164_img1.jpeg",
                    text: "Refer to the exhibit. Which action restores the routes from neighbors while still filtering 1.1.1.0/24?",
                    options: [
                        { letter: "A", text: "Modify the access list to deny instead of permit it." },
                        { letter: "B", text: "Modify the route map to permit the access list instead of deny it." },
                        { letter: "C", text: "Add a second line in the access list to permit any." },
                        { letter: "D", text: "Add a second sequence in the route map permit 20." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 342,
                    type: "multiple-choice",
                    text: "Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 343,
                    type: "multiple-choice",
                    image: "images/page165_img1.jpeg",
                    text: "Refer to the exhibit. Which action fixes the OSPF routes redistribution into EIGRP?",
                    options: [
                        { letter: "A", text: "Set tags before matching into EIGRP." },
                        { letter: "B", text: "Match external type to type-1." },
                        { letter: "C", text: "Match OSPF and EIGRP IDs." },
                        { letter: "D", text: "Set a default metric in the route map." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 344,
                    type: "multiple-choice",
                    image: "images/page165_img1.jpeg",
                    text: "Rafer to the exhibit. An engineer implemented CoPP but did not see OSPF traffic going through it. Which configuration resolves the issue?7",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 345,
                    type: "multiple-choice",
                    text: "Which configuration meets the requirement on R1?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 346,
                    type: "multiple-choice",
                    text: "Which feature drops packets if the source address is not found in the snooping table?",
                    options: [
                        { letter: "A", text: "IPv6 Source Guard" },
                        { letter: "B", text: "IPv6 Prefix Guard" },
                        { letter: "C", text: "Binding Table Recovery" },
                        { letter: "D", text: "IPv6 Destination Guard" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 347,
                    type: "multiple-choice",
                    image: "images/page167_img1.jpeg",
                    text: "Refer to the exhibit. Jitter on the link between R101 and R201 was tested for voice traffic over port 16384 without the control communication on port 1967. Which command enables R201 to receive RTT for the configured IP SLA?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 348,
                    type: "multiple-choice",
                    image: "images/page168_img1.jpeg",
                    text: "Refer to the exhibit. Users from the 192.168.2.0/24 network cannot connect to the 172.16.2.32/28 network. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 349,
                    type: "multiple-choice",
                    text: "Which routing protocol is used by the PE router to advertise routes to a CE router without redistribution or static afterremoving the RD tag from the P router?",
                    options: [
                        { letter: "A", text: "MP-BGP" },
                        { letter: "B", text: "IS-lS" },
                        { letter: "C", text: "BGP IPv4" },
                        { letter: "D", text: "OSPF" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 350,
                    type: "multiple-choice",
                    text: "A newly installed router starts establishing an LDP session from another MPLS router to which it is not directly connected. Which LDP message type responds by target router to the initiating router using UDP protocol?",
                    options: [
                        { letter: "A", text: "advertisement message" },
                        { letter: "B", text: "session message" },
                        { letter: "C", text: "notification message" },
                        { letter: "D", text: "extended discovery message" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 351,
                    type: "multiple-choice",
                    image: "images/page169_img1.jpeg",
                    text: "Refer to the exhibit. The IT router has been configured with the Maths VRF and the interfaces have been assigned to the VRF. Which set of configurations exchanges routes between the Maths-1 and Maths-2 routers using OSPF in area 0?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 352,
                    type: "multiple-choice",
                    image: "images/page170_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer cannot remote access R3 using Telnet from switch S1. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Allow to use the ssh -| admin 10.0.0.1 command on the switch." },
                        { letter: "B", text: "Add the transport input telnet command on R3." },
                        { letter: "C", text: "Add the login admin command on the switch." },
                        { letter: "D", text: "Allow the inbound connection via the exec command on R3." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 353,
                    type: "multiple-choice",
                    image: "images/page170_img1.jpeg",
                    text: "Refer to the exhibit. R1 and R2 cannot establish an EIGRP adjacency. Which action establishes EIGRP adjacency?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 354,
                    type: "multiple-choice",
                    image: "images/page171_img1.jpeg",
                    text: "Refer to the exhibit. A network engineer receives a report that Spoke 1 users can perform bank transactions with the server located at the Center site, but Spoke 2 users cannot. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure the Spoke 2 users IP on the router B OSPF domain." },
                        { letter: "B", text: "Configure IPv6 on the routers B and C Interfaces." },
                        { letter: "C", text: "Configure encapsulation dot1q 78 on the router C interface." },
                        { letter: "D", text: "Configure OSPFv2 on the routers B and C interfaces." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 355,
                    type: "multiple-choice",
                    text: "What are two functions of LDP? (Choose two.)",
                    options: [
                        { letter: "A", text: "It uses Forwarding Equivalence Class." },
                        { letter: "B", text: "It must use Resource Reservation Protocol" },
                        { letter: "C", text: "It is defined in RFC 3038 and 3039." },
                        { letter: "D", text: "It advertises labels per Forwarding Equivalence Class." },
                        { letter: "E", text: "It requires MPLS Traffic Engineering." },
                    ],
                    correct: ["A", "D"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 356,
                    type: "multiple-choice",
                    image: "images/page171_img1.jpeg",
                    text: "Refer to the exhibit. Which configuration resolves the route filtering issue on R1 to redistribute all the routes except 172.16.2.48/28?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 357,
                    type: "multiple-choice",
                    text: "Which protocol does MPLS use to support traffic engineering?",
                    options: [
                        { letter: "A", text: "RSVP" },
                        { letter: "B", text: "TDP" },
                        { letter: "C", text: "LDP" },
                        { letter: "D", text: "BGP" },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 358,
                    type: "multiple-choice",
                    image: "images/page172_img1.jpeg",
                    text: "Refer to the exhibit. R6 should reach R1 via R5>R2>R1. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Increase the cost to 61 between R2-R3-R1." },
                        { letter: "B", text: "Decrease the cost to 41 between R2 and R1." },
                        { letter: "C", text: "Increase the cost to 61 between R2 and R3." },
                        { letter: "D", text: "Decrease the cost to 2 between R6-R5-R2." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 359,
                    type: "multiple-choice",
                    image: "images/page173_img1.jpeg",
                    text: "Refer to the exhibit. R1 is configured with uRPF, and ping to R1 is failing from a source present in the R1 routing table via the GigabitEthernet 0/0 interface. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Add a floating static route to the source on R1 to the GigabitEthernet 0/1 interface." },
                        { letter: "B", text: "Modify the uRPF mode from strict to loose." },
                        { letter: "C", text: "Remove the access list from the interface GigabitEthernet 0/0." },
                        { letter: "D", text: "Enable Cisco Express Forwarding to ensure that uRPF is functioning correct." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 360,
                    type: "multiple-choice",
                    image: "images/page173_img1.jpeg",
                    text: "Refer to the exhibit. The client received the IPv6 address from the IPv6 DHCP server but the show command does not show the IPv6 DHCP bindings on the server. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Configure authorized DHCP servers to avoid IPv6 addresses from a rogue DHCP server." },
                        { letter: "B", text: "Configure H1 as the DHCP client that manually assigns the IPv6 address on interface e0/0." },
                        { letter: "C", text: "Use the 2001:DBB:BAD:CODE::/64 prefix for the DHCP pool on R1." },
                        { letter: "D", text: "Extend the DHCP lease time because R1 removed the IPv6 address earlier after the lease expired." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 361,
                    type: "multiple-choice",
                    image: "images/page174_img1.jpeg",
                    text: "Refer to the exhibit. The engineer is getting an error when trying to transfer a new IOS file to the router. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "Delete some files on the router flash memory." },
                        { letter: "B", text: "Remove any access-list filtering the TFTP file transfer." },
                        { letter: "C", text: "Delete some files on the router NVRAM." },
                        { letter: "D", text: "Split the file into parts to transfer them one by one." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 362,
                    type: "multiple-choice",
                    text: "Which lGPs are supported by the MPLS LDP autoconfiguration feature?",
                    options: [
                        { letter: "A", text: "RIPv2 and OSPF" },
                        { letter: "B", text: "OSPF and EIGRP" },
                        { letter: "C", text: "ISIS and RlPv2" },
                        { letter: "D", text: "OSPF and ISIS" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 363,
                    type: "multiple-choice",
                    text: "What does IPv6 Source Guard utilize to determine if IPv6 source addresses should be forwarded?",
                    options: [
                        { letter: "A", text: "DHCP" },
                        { letter: "B", text: "ACLs" },
                        { letter: "C", text: "ACE" },
                        { letter: "D", text: "Binding Table" },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 364,
                    type: "multiple-choice",
                    text: "An engineer configured two routers connected to two different service providers using BGP with default attributes. One of the links is presenting high delay, which causes slowness in the network. Which BGP attribute must the engineer configure to avoid using the high-delay ISP link if the second ISP ink is up?",
                    options: [
                        { letter: "A", text: "AS-PATH" },
                        { letter: "B", text: "LOCAL_PREF" },
                        { letter: "C", text: "WEIGHT" },
                        { letter: "D", text: "MED" },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 365,
                    type: "multiple-choice",
                    text: "What is the purpose of the DHCPv6 Guard?",
                    options: [
                        { letter: "A", text: "It blocks DHCPv6 messages from relay agents to a DHCPv6 server." },
                        { letter: "B", text: "It messages between a DHCPv6 server anda DHCPv6 client (or relay agent)" },
                        { letter: "C", text: "It shows that clients of a DHCPv6 server are affected." },
                        { letter: "D", text: "It allows DHCPv6 reply and advertisements from (rogue) DHCPv6 servers." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 366,
                    type: "multiple-choice",
                    image: "images/page175_img1.jpeg",
                    text: "Refer to the exhibit. The network engineer configured the summarization of the RIP routes into the OSPF domain on R5 but still sees four different 172.16.0.0/24 networks on R4. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 367,
                    type: "multiple-choice",
                    image: "images/page175_img1.jpeg",
                    text: "Refer to the exhibit. An engineer must extend VRF-Lite over a trunk to another switch for VLAN 70 (10.70.70.0/24) on port GigabitEthernet0/0 and VLAN 80 (10.80.80.0/24) on port GioabitEthermet0/1. Which configuration accomplishes this objective?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 368,
                    type: "multiple-choice",
                    image: "images/page176_img1.jpeg",
                    text: "Refer to the exhibit. An administrator configured a Cisco router for TACACS authentication, but the router is using the local enable password instead. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 369,
                    type: "multiple-choice",
                    image: "images/page176_img1.jpeg",
                    text: "Refer to the exhibit. The security department recently installed a monitoring device between routers R3 and R5, which caused a loss of network connectivity for users connected to R5. Troubleshooting revealed that the monitoring device cannot forward multicast packets. The team already updated R5 with the correct configuration. Which configuration must be implemented on R3 to resolve the problem by ensuring R3 as the DR for the R3-R5 segment?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 370,
                    type: "multiple-choice",
                    image: "images/page177_img1.jpeg",
                    text: "Refer to the exhibits. A user on the 192.168.1.0/24 network can successfully ping192.168.3.1, but the administrator cannot ping 192.168.3.1 from the LA router. Which set of configurations fixes the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 371,
                    type: "multiple-choice",
                    image: "images/page178_img1.jpeg",
                    text: "Refer to the exhibit. An engineer sets up a DMVPN connection to connect branch 1 and branch 2 to HQ. Branch 1 and branch 2 cannot communicate with each other. Which change must be made to resolve this issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 372,
                    type: "multiple-choice",
                    image: "images/page179_img1.jpeg",
                    text: "Refer to the exhibit. Users on a call center report that they cannot browse the internet on Saturdays during the afternoon. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 373,
                    type: "multiple-choice",
                    image: "images/page179_img1.jpeg",
                    text: "Refer to the exhibit. An IPv6 ACL is applied to restrict PC1 from communicating with PC2 and allow all other traffic. Which configuration resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 374,
                    type: "multiple-choice",
                    text: "Which table is used to map the packets in an MPLS LSP that exit from the same interface, via the same next hop, and have the same queuing policies?",
                    options: [
                        { letter: "A", text: "CEF" },
                        { letter: "B", text: "LDP" },
                        { letter: "C", text: "FEC" },
                        { letter: "D", text: "RIB" },
                    ],
                    correct: ["C"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 375,
                    type: "multiple-choice",
                    image: "images/page180_img1.jpeg",
                    text: "Refer to the exhibit. R2 has been receiving routes from R4 that originated outside AS300. A network engineer configured an AS-Path ACL to avoid adding these routes to the R2 BGP table, but the routes are still present in the R2 routing table. Which action resolves the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 376,
                    type: "multiple-choice",
                    image: "images/page180_img1.jpeg",
                    text: "Refer to the exhibit. A network administrator configured name resolution for IPv6 traffic to be allowed through an inbound access list. After the access list is applied to resolve the issue, name resolution still did not work. Which action does the network administrator take to resolve the name resolution problem?",
                    options: [
                        { letter: "A", text: "Add permit udp any eq domain any log in the access list" },
                        { letter: "B", text: "Add permit udp any eq domain 53 any log in the access list." },
                        { letter: "C", text: "Remove ipv6 inspect ipv6-firewall in from interface gi0/1." },
                        { letter: "D", text: "Inspect ipv6 inspect name ipv6-firewall udp 53 in global config." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 377,
                    type: "multiple-choice",
                    text: "After the configuration, the LA router receives all the specific NewYork routes except the summary route. Which set of configurations resolve the issue on the Chicago router?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 378,
                    type: "multiple-choice",
                    text: "Which two actions must the engineer take to resolve the issue? (Choose two.)",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B", "C"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 379,
                    type: "multiple-choice",
                    image: "images/page182_img1.jpeg",
                    text: "Refer to the exhibit. Two routers are connected back to back via Gigabit Ethernet 0/0 interfaces. Which configuration provides VRF-Lite connectivity for two separate VRFs using the prefixes 10.1.1.0/24 for one VRF and 10.2.2.0/24 for the other VRF?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 380,
                    type: "multiple-choice",
                    image: "images/page183_img1.jpeg",
                    text: "Refer to the exhibit. R6 must be configured using an access list to only accept the network 1.1.1.1/32 from R1. Which access list must the engineer choose to meet this requirement?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["B"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 381,
                    type: "multiple-choice",
                    image: "images/page184_img1.jpeg",
                    text: "Refer to the exhibit. R5 should not receive any routes originated in the EIGRP domain. Which set of configuration changes removes the EIGRP routes from routing table to fix the issue?",
                    options: [
                        { letter: "A", text: "B." },
                        { letter: "C", text: "D." },
                    ],
                    correct: ["A"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 382,
                    type: "multiple-choice",
                    text: "What is an advantage of implementing BFD?",
                    options: [
                        { letter: "A", text: "BFD is deployed without the need to run any routing protocol." },
                        { letter: "B", text: "BFD provides faster updates for any flapping route." },
                        { letter: "C", text: "BFD provides better capabilities to maintain the routing table." },
                        { letter: "D", text: "BFD provides millisecond failure detection." },
                    ],
                    correct: ["D"],
                    isMultiple: false,
                    explanation: ""
                },
                {
                    id: 383,
                    type: "multiple-choice",
                    text: "Which two reasons would cause an LSP to break between two PE routers? (Choose two.)",
                    options: [
                        { letter: "A", text: "lost LDP adjacency" },
                        { letter: "B", text: "lGP hello adjacency" },
                        { letter: "C", text: "prefix mismatch" },
                        { letter: "D", text: "matching labels" },
                        { letter: "E", text: "MPLS not enabled" },
                    ],
                    correct: ["C", "E"],
                    isMultiple: true,
                    explanation: ""
                },
                {
                    id: 384,
                    type: "multiple-choice",
                    text: "Which two protocols work in the control plane of P routers across the MPLS cloud? (Choose two.)",
                    options: [
                        { letter: "A", text: "LDP" },
                        { letter: "B", text: "MPLS OAM" },
                        { letter: "C", text: "LSP" },
                        { letter: "D", text: "ECMF" },
                        { letter: "E", text: "RSVP" },
                    ],
                    correct: ["A", "E"],
                    isMultiple: true,
                    explanation: ""
                },