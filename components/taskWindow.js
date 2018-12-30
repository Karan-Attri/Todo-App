import React, { Component } from 'react';
// import $ from 'jquery';

class TaskWindow extends Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.show == true) {
            //debugger
            //$('#myModal').modal();
        }
    }
    componentDidMount() {
        $('#exampleModal').modal('show');
        console.log($('#exampleModal').className);
    }
    render() {
        if (!this.props.show)
            return null;
        const modalclass = this.props.show ? "modal face" : "modal display-none"
        return (
            // <div id='myModal' className={modalclass} role="dialog">
            //     <div class="modal-dialog">                
            //         <div class="modal-content">
            //             <div className='modal-body d-flex'>
            //                 <div>
            //                     <input type='text' placeholder='Task name...' className='taskname' />
            //                     <input type='text' placeholder='Note' className='note' />

            //                 </div>
            //                 <div>
            //                     <button className='category'>Category</button>
            //                     <button className='addtask'> Add Task</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>
                <div className="modal fade" ref={modal => this.modal = modal} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Modal Body
                    </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.handleCloseClick}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



}
export default TaskWindow;