import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [],
           
        };
    }

    async componentDidMount() {
        // GET request using fetch with async/await
        const response = await fetch('https://abhinayx.github.io/studentjson/db.json');
        const data = await response.json();
        this.setState({ name: data,           
        })

    }

    render() {
        const{name} = this.state;
        console.log(name);
        return (
           
            <div className="wrappercontent"> 
                 <table id="customers"> 

                                   <thead> 
                                       <tr>
                                           <th>
                                               Names
                                           </th>
                                           <th>
                                               Roll Number
                                           </th>
                                         <th>
                                             Total Marks
                                         </th>
                                         <th>
                                             Status 
                                         </th>
                                       </tr>
                                   </thead>
                                   {
                Object.keys(name)
                    .map((key,i) => {
                        var studentname = name[key]['name'];
                        // studentname= studentname.sort()
                        var res = studentname.charAt(0);
                        var cap = res.toUpperCase();
                        var n = studentname.length;
                        var sliced = studentname.slice(1, n);
                        var fullname = cap + sliced
                        // fullname= fullname.sort();
                        var studentRoll = name[key]['rollNumber'];
                        var math = parseInt(name[key]['marks']['Maths']);
                        var eng = parseInt(name[key]['marks']['English']);
                        var sci = parseInt(name[key]['marks']['Science']);
                        var total = math + eng+sci;
                        var marks = 20;
                        var status = "";
                        if(math >= marks && eng >= marks && sci >= marks )
                        {
                             status = "Pass";
                        }
                        else{
                            status="Fail";
                        }
                       return(
                        <tbody>
                                                                                             
                        <td>
                        {fullname}
                        </td>
                        <td>
                            {studentRoll}
                        </td>
                        <td>
                            {total}
                        </td>
                        <td>
                            {status}
                        </td>
                          
                        </tbody>
                       )
                    } )
                   
                }
                                   
                               </table>
                                           
                </div>

        )

        }
}


export default  Table; 