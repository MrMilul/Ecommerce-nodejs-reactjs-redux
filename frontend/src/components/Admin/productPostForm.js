import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCat } from '../../redux/actions/category'
import { connect } from 'react-redux'

 class ProductPostForm extends Component {
    static propTypes = {
        categories: PropTypes.object.isRequired,
    }
    constructor(props){
        super()
        this.state ={
            name: '', 
            createdAt: '',
            price: 0,
            countInStock: 0,
            category:'',
            imageURI:'',
            feachered: 'false',
            discount:'false',
            newPrice: '',
            barand:'',



        }
    }
    componentDidMount() {
        this.props.getCat() 
    }
    makeSate = (ev)=>{
        let name = ev.target.name
        let value = ev.target.value
        this.setState({
            [name]: [value]    
        })
    }
    render() {
        console.log(this.state)
        return (
            
                    <div className='col-md-6 mt-4'>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="inputname44">Name</label>
                            <input type="text" name='name' className="form-control" id="inputname4" onChange={this.makeSate}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="date">Created At:</label>
                                <input type="date" name='createdAt' className="form-control" id="date" onChange={this.makeSate}/>
                            </div>
                        </div>

                        <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="inputprice">Price</label>
                            <input type="number" name='price' className="form-control" id="inputprice" onChange={this.makeSate}/>
                            </div>
                            <div className="form-group col-md-4">
                            <label for="Instuck">In Stuck</label>
                            <input type="number" name='countInStock' className="form-control" id="Instuck" onChange={this.makeSate}/>
                            </div>
                            <div className="form-group col-md-4">
                            <label for="category">Category</label>
                            <select id="category" name='category' className="form-control" onChange={this.makeSate}>
                                <option selected>Choose...</option>
                               {this.props.catData.categories.map(cat =>{
                                   return (
                                    <option key={cat.id}>{cat.category}</option>
                                   )
                               })}
                            </select>
                            </div>

                        </div>
                       
                        <div className="form-group">
                            <label for="description">Description</label>
                            <textarea type="text"  name='Description' className="form-control" id="description" placeholder="Product Description"/>
                        </div>
                       
                        <div className="form-group float-left" >
                            <label for="exampleFormControlFile1">Product Image</label>
                            <input type="file" name='imageURI' className="form-control-file" id="exampleFormControlFile1"/>
                        </div>

                        <div className="form-group  float-left mt-2">
                            <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                            <label className="form-check-label " name='feachered'for="exampleCheck1">Feachered</label><br/>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                        
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                           sALAM
                            </div>
                            </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
                    </div>
               
        )
    }
}
const mapStateToProps = state =>{
    return {
        catData:{
            count: state.category.catData.count,
            categories: state.category.catData.categories
        },
        categories : state.category.categories

    }
}
export default connect(mapStateToProps, {getCat})(ProductPostForm)