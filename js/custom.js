 $(document).ready(function(){
         	$('#notification').click(function(){
         	alert('You have 3 unread notifications');
         	
         	});
         $('#message').click(function(){
         alert('You have 3 unread messages');
         });
         	
         	$('#uservoice').click(function(){
         	swal("Please enter your name:", {
           content: "input",
         })
         .then((value) => {
           swal(`You typed: ${value}`);
         });
         	});
         	
         });
         
         var xValues = ["JAN", "FEB", "MAR", "APR", "MAY","JUN"];
         var yValues = [30, 30, 35, 30, 30, 35];
         var barColors = [
           "rgba(92,92,92,1.0)",
           "rgba(92,92,92,1.0)",
           "rgba(92,92,92,1.0)",
           "rgba(92,92,92,1.0)",
           "rgba(92,92,92,1.0)",
            "rgba(92,92,92,1.0)"
         ];
         
         new Chart("myChart", {
           type: "bar",
           data: {
             labels: xValues,
             datasets: [{
               backgroundColor: barColors,
               data: yValues
             }]
           },
           options: {
             legend: {display: false},
             scales: {
               yAxes: [{
                 ticks: {
                   beginAtZero: true,
         display:false
                 },
         gridLines: {
                display:false
            }
               }],
         xAxes: [{
            gridLines: {
                display:false
            }   
         }]
             },
         tooltips: {
         enabled: false
         },
           }
         });
         var xValues = [50,60,70,80,90,100,110,120];
         var yValues = [7,8,7.5,8,8,8.5,7.4,7.5];
         
         new Chart("myChart2", {
           type: "line",
           data: {
             labels: xValues,
             datasets: [{
               fill: false,
               lineTension: 0,
               backgroundColor: "#989896",
               borderColor: "rgba(0,0,255,0.1)",
               data: yValues
             }]
           },
           options: {
             legend: {display: false},
             scales: {
               yAxes: [
         {
         ticks:
         {
         min: 6, max:16,
         display:false
         }
         },
         
         ],
             },
         tooltips: {
         enabled: false
         }
           }
         });
         
         
         
         // chart colors
         var colors = ['#989896'];
         
         /* large line chart */
         var chLine = document.getElementById("chLine");
         var chartData = {
         labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE"],
         datasets: [{
         
         
         data: [68, 60, 72, 65, 73, 80],
         backgroundColor: '#f3f3f3',
         borderColor: colors[0],
         borderWidth: 1,
         pointBackgroundColor: colors[0]
         }
         
         ]
         };
         
         new Chart(chLine, {
         type: 'line',
         data: chartData,
         options: {
         scales: {
         xAxes: [{
         ticks: {
          beginAtZero: false,
         display:true,
         
         },
         gridLines: {
                display:false
            }
         }],
         
         yAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         },
         gridLines: {
                display:false
            }
         }]
         },
         legend: {
         display: false
         },
         responsive: true,
         
         }
         });
         
         // chart colors
         var colors = ['#5f5f5f'];
         
         /* large line chart */
         var chLine2 = document.getElementById("chLine2");
         var chartData = {
         labels: [10, 20, 30, 40, 50, 60, 70, 80],
         datasets: [{
         
         
         data: [10, 12, 11, 14, 13, 12, 10, 12],
         backgroundColor: 'transparent',
         borderColor: colors[0],
         borderWidth: 4,
         pointBackgroundColor: colors[0]
         }
         
         ]
         };
         
         new Chart(chLine2, {
         type: 'line',
         data: chartData,
         options: {
         scales: {
         xAxes: [{
         ticks: {
          beginAtZero: false,
         display:false
         
         },
         
         }],
         yAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         },
         gridLines: {
                display:false
            }
         }]
         },
         legend: {
         display: false
         },
         tooltips: {
         enabled: false
         },
         responsive: true,
         
         }
         });
         // chart colors
         var colors = ['#5f5f5f'];
         
         /* large line chart */
         var chLine3 = document.getElementById("chLine3");
         var chartData = {
         labels: [10, 20, 30, 40, 50, 60, 70, 80],
         datasets: [{
         
         
         data: [10, 12, 11, 12, 12, 12, 11, 12],
         backgroundColor: 'transparent',
         borderColor: colors[0],
         borderWidth: 4,
         pointBackgroundColor: colors[0]
         }
         
         ]
         };
         
         new Chart(chLine3, {
         type: 'line',
         data: chartData,
         options: {
         scales: {
         xAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         }
         }],
         yAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         },
         gridLines: {
                display:false
            }
         }]
         },
         legend: {
         display: false
         },
         tooltips: {
         enabled: false
         },
         responsive: true,
         
         }
         });
         var colors = ['#5f5f5f'];
         
         /* large line chart */
         var chLine4 = document.getElementById("chLine4");
         var chartData = {
         labels: [10, 20, 30, 40, 50, 60, 70, 80],
         datasets: [{
         
         
         data: [10, 11, 12, 13, 12, 12, 11, 13],
         backgroundColor: 'transparent',
         borderColor: colors[0],
         borderWidth: 4,
         pointBackgroundColor: colors[0]
         }
         
         ]
         };
         
         new Chart(chLine4, {
         type: 'line',
         data: chartData,
         options: {
         scales: {
         xAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         }
         }],
         yAxes: [{
         ticks: {
          beginAtZero: true,
         display:false
         },
         gridLines: {
                display:false
            }
         }]
         },
         legend: {
         display: false
         },
         tooltips: {
         enabled: false
         },
         responsive: true,
         
         }
         });