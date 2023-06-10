import React from 'react'

const FormEditProduct = () => {
  return (
    <div>
        <h3 className="">Product</h3>
        <p className="">Edit Product</p>
        <form className=''>
            <div class="mb-3">
                <label for="name" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="name" name='name'/>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" name='price'/>
            </div>
            <button type="submit" class="btn btn-primary w-100">Update</button>
        </form>
    </div>
  )
}

export default FormEditProduct