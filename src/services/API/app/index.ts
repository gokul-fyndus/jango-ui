import { jango as api } from "../../../globals/jango";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    deleteWorkOrder: build.mutation<
      DeleteWorkOrderApiResponse,
      DeleteWorkOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/work-order/${queryArg.isRemove}`,
        method: "PUT",
      }),
    }),
    updateWorkOrder: build.mutation<
      UpdateWorkOrderApiResponse,
      UpdateWorkOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/work-order-update/${queryArg.id}`,
        method: "PUT",
        body: queryArg.workOrderDto,
      }),
    }),
    getVendor: build.query<GetVendorApiResponse, GetVendorApiArg>({
      query: (queryArg) => ({ url: `/api/v2/vendor/${queryArg.id}` }),
    }),
    updateVendor: build.mutation<UpdateVendorApiResponse, UpdateVendorApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/vendor/${queryArg.id}`,
        method: "PUT",
        body: queryArg.vendorDto,
      }),
    }),
    deleteVendor: build.mutation<DeleteVendorApiResponse, DeleteVendorApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/vendor/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    changeDeliveryStatus: build.mutation<
      ChangeDeliveryStatusApiResponse,
      ChangeDeliveryStatusApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/update-delivery-status`,
        method: "PUT",
        params: {
          deliveryStatus: queryArg.deliveryStatus,
          deliveryId: queryArg.deliveryId,
        },
      }),
    }),
    getSpecificationId: build.query<
      GetSpecificationIdApiResponse,
      GetSpecificationIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/specification/${queryArg.specificationId}`,
      }),
    }),
    updateSpecification: build.mutation<
      UpdateSpecificationApiResponse,
      UpdateSpecificationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/specification/${queryArg.specificationId}`,
        method: "PUT",
        body: queryArg.specificationDto,
      }),
    }),
    deleteSpecification: build.mutation<
      DeleteSpecificationApiResponse,
      DeleteSpecificationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/specification-delete/${queryArg.specificationId}`,
        method: "PUT",
      }),
    }),
    deleteOrderDetail: build.mutation<
      DeleteOrderDetailApiResponse,
      DeleteOrderDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/remove-order-detail/${queryArg.id}`,
        method: "PUT",
      }),
    }),
    getQuotationDetailById: build.query<
      GetQuotationDetailByIdApiResponse,
      GetQuotationDetailByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/quotation-detail/${queryArg.quotationDetailId}`,
      }),
    }),
    updateQuotationDetails: build.mutation<
      UpdateQuotationDetailsApiResponse,
      UpdateQuotationDetailsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/quotation-detail/${queryArg.quotationDetailId}`,
        method: "PUT",
        body: queryArg.quotationDetailDto,
      }),
    }),
    deleteQuotationDetail: build.mutation<
      DeleteQuotationDetailApiResponse,
      DeleteQuotationDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/quotation-delete/${queryArg.quotationDetailId}`,
        method: "PUT",
      }),
    }),
    updatePricing: build.mutation<
      UpdatePricingApiResponse,
      UpdatePricingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/pricing/${queryArg.id}`,
        method: "PUT",
        body: queryArg.pricingDto,
      }),
    }),
    deleteOrder: build.mutation<DeleteOrderApiResponse, DeleteOrderApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/pricing/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    retrieveOrder: build.query<RetrieveOrderApiResponse, RetrieveOrderApiArg>({
      query: (queryArg) => ({ url: `/api/v2/order/${queryArg.id}` }),
    }),
    updateOrder: build.mutation<UpdateOrderApiResponse, UpdateOrderApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/order/${queryArg.id}`,
        method: "PUT",
        body: queryArg.orderInformationDto,
      }),
    }),
    deleteOrder1: build.mutation<DeleteOrder1ApiResponse, DeleteOrder1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/order/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    deleteOrderWorkFlow: build.mutation<
      DeleteOrderWorkFlowApiResponse,
      DeleteOrderWorkFlowApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-work-flow/${queryArg.isRemove}`,
        method: "PUT",
      }),
    }),
    updateOrderWorkFlow: build.mutation<
      UpdateOrderWorkFlowApiResponse,
      UpdateOrderWorkFlowApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-work-flow-update/${queryArg.id}`,
        method: "PUT",
        body: queryArg.orderWorkFlowDto,
      }),
    }),
    updateOrderDetail: build.mutation<
      UpdateOrderDetailApiResponse,
      UpdateOrderDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-detail/${queryArg.orderDetailId}`,
        method: "PUT",
        body: queryArg.orderDetailDto,
      }),
    }),
    editMaterial: build.mutation<EditMaterialApiResponse, EditMaterialApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/material-request/${queryArg.id}`,
        method: "PUT",
        body: queryArg.materialRequestDto,
      }),
    }),
    updateInventory: build.mutation<
      UpdateInventoryApiResponse,
      UpdateInventoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/inventory/${queryArg.id}`,
        method: "PUT",
        body: queryArg.inventoryDto,
      }),
    }),
    deleteInventory: build.mutation<
      DeleteInventoryApiResponse,
      DeleteInventoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/inventory/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    updateEmployee: build.mutation<
      UpdateEmployeeApiResponse,
      UpdateEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/employee/${queryArg.id}`,
        method: "PUT",
        body: queryArg.employee,
      }),
    }),
    getWorkOrder: build.query<GetWorkOrderApiResponse, GetWorkOrderApiArg>({
      query: () => ({ url: `/api/v2/work-order` }),
    }),
    createWorkOrder: build.mutation<
      CreateWorkOrderApiResponse,
      CreateWorkOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/work-order`,
        method: "POST",
        body: queryArg.workOrderDto,
      }),
    }),
    getVendorList: build.query<GetVendorListApiResponse, GetVendorListApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/vendor`,
        params: { paginationDTO: queryArg.paginationDto },
      }),
    }),
    createVendor: build.mutation<CreateVendorApiResponse, CreateVendorApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/vendor`,
        method: "POST",
        body: queryArg.vendorDto,
      }),
    }),
    getSpecification: build.query<
      GetSpecificationApiResponse,
      GetSpecificationApiArg
    >({
      query: () => ({ url: `/api/v2/specification` }),
    }),
    setSpecification: build.mutation<
      SetSpecificationApiResponse,
      SetSpecificationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/specification`,
        method: "POST",
        body: queryArg.specificationDto,
      }),
    }),
    getQuotationDetail: build.query<
      GetQuotationDetailApiResponse,
      GetQuotationDetailApiArg
    >({
      query: () => ({ url: `/api/v2/quotation-detail` }),
    }),
    createQuotationDetail: build.mutation<
      CreateQuotationDetailApiResponse,
      CreateQuotationDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/quotation-detail`,
        method: "POST",
        body: queryArg.quotationDetailDto,
      }),
    }),
    createOrder: build.mutation<CreateOrderApiResponse, CreateOrderApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/order`,
        method: "POST",
        body: queryArg.orderInformationDto,
      }),
    }),
    getOrderWorkFlow: build.query<
      GetOrderWorkFlowApiResponse,
      GetOrderWorkFlowApiArg
    >({
      query: () => ({ url: `/api/v2/order-work-flow` }),
    }),
    createOrderWorkFlow: build.mutation<
      CreateOrderWorkFlowApiResponse,
      CreateOrderWorkFlowApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-work-flow`,
        method: "POST",
        body: queryArg.orderWorkFlowDto,
      }),
    }),
    getWorkOrder1: build.query<GetWorkOrder1ApiResponse, GetWorkOrder1ApiArg>({
      query: () => ({ url: `/api/v2/order-detail` }),
    }),
    createOrderDetail: build.mutation<
      CreateOrderDetailApiResponse,
      CreateOrderDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-detail`,
        method: "POST",
        body: queryArg.body,
        params: { order: queryArg.order },
      }),
    }),
    getInventory: build.query<GetInventoryApiResponse, GetInventoryApiArg>({
      query: () => ({ url: `/api/v2/inventory` }),
    }),
    createInventory: build.mutation<
      CreateInventoryApiResponse,
      CreateInventoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/inventory`,
        method: "POST",
        body: queryArg.inventoryDto,
      }),
    }),
    createMaterial: build.mutation<
      CreateMaterialApiResponse,
      CreateMaterialApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/create/material-request`,
        method: "POST",
        body: queryArg.materialRequestDto,
      }),
    }),
    createPricing: build.mutation<
      CreatePricingApiResponse,
      CreatePricingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/create-pricing`,
        method: "POST",
        body: queryArg.pricingDto,
      }),
    }),
    createDelivery: build.mutation<
      CreateDeliveryApiResponse,
      CreateDeliveryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/create-delivery`,
        method: "POST",
        body: queryArg.deliveryDto,
      }),
    }),
    createEmployee: build.mutation<
      CreateEmployeeApiResponse,
      CreateEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/create-employee`,
        method: "POST",
        body: queryArg.employeeDto,
      }),
    }),
    createCustomer: build.mutation<
      CreateCustomerApiResponse,
      CreateCustomerApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/create-customer`,
        method: "POST",
        body: queryArg.customerDto,
      }),
    }),
    retrieveWorkOrderId: build.query<
      RetrieveWorkOrderIdApiResponse,
      RetrieveWorkOrderIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/work-order/${queryArg.id}` }),
    }),
    searchWorkOrder: build.query<
      SearchWorkOrderApiResponse,
      SearchWorkOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/work-order-search`,
        params: {
          search: queryArg.search,
          page: queryArg.page,
          size: queryArg.size,
          sortField: queryArg.sortField,
          sortDirection: queryArg.sortDirection,
        },
      }),
    }),
    searchVendor: build.query<SearchVendorApiResponse, SearchVendorApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/vendor/search`,
        params: {
          paginationDTO: queryArg.paginationDto,
          search: queryArg.search,
        },
      }),
    }),
    getSpecificationInfo: build.query<
      GetSpecificationInfoApiResponse,
      GetSpecificationInfoApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/specification/search`,
        params: {
          search: queryArg.search,
          pageNo: queryArg.pageNo,
          pageSize: queryArg.pageSize,
          fieldName: queryArg.fieldName,
          direction: queryArg.direction,
        },
      }),
    }),
    searchOrderDetail: build.query<
      SearchOrderDetailApiResponse,
      SearchOrderDetailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/search-order`,
        params: {
          search: queryArg.search,
          page: queryArg.page,
          size: queryArg.size,
          sortField: queryArg.sortField,
          sortDirection: queryArg.sortDirection,
        },
      }),
    }),
    getQuotationDetail1: build.query<
      GetQuotationDetail1ApiResponse,
      GetQuotationDetail1ApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/quotation-detail/search`,
        params: {
          search: queryArg.search,
          pageNo: queryArg.pageNo,
          pageSize: queryArg.pageSize,
          fieldName: queryArg.fieldName,
          direction: queryArg.direction,
        },
      }),
    }),
    getPricing: build.query<GetPricingApiResponse, GetPricingApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/price`,
        params: { id: queryArg.id },
      }),
    }),
    getOrders: build.query<GetOrdersApiResponse, GetOrdersApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/orders`,
        params: {
          search: queryArg.search,
          page: queryArg.page,
          size: queryArg.size,
        },
      }),
    }),
    retrieveOrderWorkFlowId: build.query<
      RetrieveOrderWorkFlowIdApiResponse,
      RetrieveOrderWorkFlowIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/order-work-flow/${queryArg.id}` }),
    }),
    searchWorkOrder1: build.query<
      SearchWorkOrder1ApiResponse,
      SearchWorkOrder1ApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/order-work-flow-search`,
        params: {
          search: queryArg.search,
          page: queryArg.page,
          size: queryArg.size,
          sortField: queryArg.sortField,
          sortDirection: queryArg.sortDirection,
        },
      }),
    }),
    getAllOrById: build.query<GetAllOrByIdApiResponse, GetAllOrByIdApiArg>({
      query: (queryArg) => ({
        url: `/api/v2/material-request`,
        params: { id: queryArg.id },
      }),
    }),
    fetchInventory: build.query<
      FetchInventoryApiResponse,
      FetchInventoryApiArg
    >({
      query: (queryArg) => ({ url: `/api/v2/inventory-fetch/${queryArg.id}` }),
    }),
    getDeliveryDetailsByOrderId: build.query<
      GetDeliveryDetailsByOrderIdApiResponse,
      GetDeliveryDetailsByOrderIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/delivery-details`,
        params: { orderId: queryArg.orderId, deliveryId: queryArg.deliveryId },
      }),
    }),
    getEmployee: build.query<GetEmployeeApiResponse, GetEmployeeApiArg>({
      query: () => ({ url: `/api/v1/employees` }),
    }),
    deleteApiV2DeleteDelivery: build.mutation<
      DeleteApiV2DeleteDeliveryApiResponse,
      DeleteApiV2DeleteDeliveryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v2/delete-delivery`,
        method: "DELETE",
        params: { deliveryId: queryArg.deliveryId },
      }),
    }),
    deleteEmployee: build.mutation<
      DeleteEmployeeApiResponse,
      DeleteEmployeeApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/employee-delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as jango_app };
export type DeleteWorkOrderApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteWorkOrderApiArg = {
  isRemove: string;
};
export type UpdateWorkOrderApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateWorkOrderApiArg = {
  id: string;
  workOrderDto: WorkOrderDto;
};
export type GetVendorApiResponse = /** status 200 OK */ ResponseDto;
export type GetVendorApiArg = {
  id: string;
};
export type UpdateVendorApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateVendorApiArg = {
  id: string;
  vendorDto: VendorDto;
};
export type DeleteVendorApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteVendorApiArg = {
  id: string;
};
export type ChangeDeliveryStatusApiResponse = /** status 200 OK */ ResponseDto;
export type ChangeDeliveryStatusApiArg = {
  deliveryStatus?: string;
  deliveryId?: string;
};
export type GetSpecificationIdApiResponse = /** status 200 OK */ ResponseDto;
export type GetSpecificationIdApiArg = {
  specificationId: string;
};
export type UpdateSpecificationApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateSpecificationApiArg = {
  specificationId: string;
  specificationDto: SpecificationDto;
};
export type DeleteSpecificationApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteSpecificationApiArg = {
  specificationId: string;
};
export type DeleteOrderDetailApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteOrderDetailApiArg = {
  id: string;
};
export type GetQuotationDetailByIdApiResponse =
  /** status 200 OK */ ResponseDto;
export type GetQuotationDetailByIdApiArg = {
  quotationDetailId: string;
};
export type UpdateQuotationDetailsApiResponse =
  /** status 200 OK */ ResponseDto;
export type UpdateQuotationDetailsApiArg = {
  quotationDetailId: string;
  quotationDetailDto: QuotationDetailDto;
};
export type DeleteQuotationDetailApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteQuotationDetailApiArg = {
  quotationDetailId: string;
};
export type UpdatePricingApiResponse = /** status 200 OK */ ResponseDto;
export type UpdatePricingApiArg = {
  id: string;
  pricingDto: PricingDto;
};
export type DeleteOrderApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteOrderApiArg = {
  id: string;
};
export type RetrieveOrderApiResponse = /** status 200 OK */ ResponseDto;
export type RetrieveOrderApiArg = {
  id: string;
};
export type UpdateOrderApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateOrderApiArg = {
  id: string;
  orderInformationDto: OrderInformationDto;
};
export type DeleteOrder1ApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteOrder1ApiArg = {
  id: string;
};
export type DeleteOrderWorkFlowApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteOrderWorkFlowApiArg = {
  isRemove: string;
};
export type UpdateOrderWorkFlowApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateOrderWorkFlowApiArg = {
  id: string;
  orderWorkFlowDto: OrderWorkFlowDto;
};
export type UpdateOrderDetailApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateOrderDetailApiArg = {
  orderDetailId: string;
  orderDetailDto: OrderDetailDto;
};
export type EditMaterialApiResponse = /** status 200 OK */ ResponseDto;
export type EditMaterialApiArg = {
  id: string;
  materialRequestDto: MaterialRequestDto;
};
export type UpdateInventoryApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateInventoryApiArg = {
  id: string;
  inventoryDto: InventoryDto;
};
export type DeleteInventoryApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteInventoryApiArg = {
  id: string;
};
export type UpdateEmployeeApiResponse = /** status 200 OK */ ResponseDto;
export type UpdateEmployeeApiArg = {
  id: string;
  employee: Employee;
};
export type GetWorkOrderApiResponse = /** status 200 OK */ ResponseDto;
export type GetWorkOrderApiArg = void;
export type CreateWorkOrderApiResponse = /** status 200 OK */ ResponseDto;
export type CreateWorkOrderApiArg = {
  workOrderDto: WorkOrderDto;
};
export type GetVendorListApiResponse = /** status 200 OK */ ResponseDto;
export type GetVendorListApiArg = {
  paginationDto: PaginationDto;
};
export type CreateVendorApiResponse = /** status 200 OK */ ResponseDto;
export type CreateVendorApiArg = {
  vendorDto: VendorDto;
};
export type GetSpecificationApiResponse = /** status 200 OK */ ResponseDto;
export type GetSpecificationApiArg = void;
export type SetSpecificationApiResponse = /** status 200 OK */ ResponseDto;
export type SetSpecificationApiArg = {
  specificationDto: SpecificationDto;
};
export type GetQuotationDetailApiResponse = /** status 200 OK */ ResponseDto;
export type GetQuotationDetailApiArg = void;
export type CreateQuotationDetailApiResponse = /** status 200 OK */ ResponseDto;
export type CreateQuotationDetailApiArg = {
  quotationDetailDto: QuotationDetailDto;
};
export type CreateOrderApiResponse = /** status 200 OK */ ResponseDto;
export type CreateOrderApiArg = {
  orderInformationDto: OrderInformationDto;
};
export type GetOrderWorkFlowApiResponse = /** status 200 OK */ ResponseDto;
export type GetOrderWorkFlowApiArg = void;
export type CreateOrderWorkFlowApiResponse = /** status 200 OK */ ResponseDto;
export type CreateOrderWorkFlowApiArg = {
  orderWorkFlowDto: OrderWorkFlowDto;
};
export type GetWorkOrder1ApiResponse = /** status 200 OK */ ResponseDto;
export type GetWorkOrder1ApiArg = void;
export type CreateOrderDetailApiResponse = /** status 200 OK */ ResponseDto;
export type CreateOrderDetailApiArg = {
  order: string;
  body: {
    file: Blob;
  };
};
export type GetInventoryApiResponse = /** status 200 OK */ ResponseDto;
export type GetInventoryApiArg = void;
export type CreateInventoryApiResponse = /** status 200 OK */ ResponseDto;
export type CreateInventoryApiArg = {
  inventoryDto: InventoryDto;
};
export type CreateMaterialApiResponse = /** status 200 OK */ ResponseDto;
export type CreateMaterialApiArg = {
  materialRequestDto: MaterialRequestDto;
};
export type CreatePricingApiResponse = /** status 200 OK */ ResponseDto;
export type CreatePricingApiArg = {
  pricingDto: PricingDto;
};
export type CreateDeliveryApiResponse = /** status 200 OK */ ResponseDto;
export type CreateDeliveryApiArg = {
  deliveryDto: DeliveryDto;
};
export type CreateEmployeeApiResponse = /** status 200 OK */ ResponseDto;
export type CreateEmployeeApiArg = {
  employeeDto: EmployeeDto;
};
export type CreateCustomerApiResponse = /** status 200 OK */ ResponseDto;
export type CreateCustomerApiArg = {
  customerDto: CustomerDto;
};
export type RetrieveWorkOrderIdApiResponse = /** status 200 OK */ ResponseDto;
export type RetrieveWorkOrderIdApiArg = {
  id: string;
};
export type SearchWorkOrderApiResponse = /** status 200 OK */ ResponseDto;
export type SearchWorkOrderApiArg = {
  search?: string;
  page?: number;
  size?: number;
  sortField?: string;
  sortDirection?: string;
};
export type SearchVendorApiResponse = /** status 200 OK */ ResponseDto;
export type SearchVendorApiArg = {
  paginationDto: PaginationDto;
  search: string;
};
export type GetSpecificationInfoApiResponse = /** status 200 OK */ ResponseDto;
export type GetSpecificationInfoApiArg = {
  search?: string;
  pageNo?: number;
  pageSize?: number;
  fieldName?: string;
  direction?: "ASC" | "DESC";
};
export type SearchOrderDetailApiResponse = /** status 200 OK */ ResponseDto;
export type SearchOrderDetailApiArg = {
  search?: string;
  page?: number;
  size?: number;
  sortField?: string;
  sortDirection?: string;
};
export type GetQuotationDetail1ApiResponse = /** status 200 OK */ ResponseDto;
export type GetQuotationDetail1ApiArg = {
  search?: string;
  pageNo?: number;
  pageSize?: number;
  fieldName?: string;
  direction?: "ASC" | "DESC";
};
export type GetPricingApiResponse = /** status 200 OK */ ResponseDto;
export type GetPricingApiArg = {
  id?: string;
};
export type GetOrdersApiResponse = /** status 200 OK */ ResponseDto;
export type GetOrdersApiArg = {
  search?: string;
  page?: number;
  size?: number;
};
export type RetrieveOrderWorkFlowIdApiResponse =
  /** status 200 OK */ ResponseDto;
export type RetrieveOrderWorkFlowIdApiArg = {
  id: string;
};
export type SearchWorkOrder1ApiResponse = /** status 200 OK */ ResponseDto;
export type SearchWorkOrder1ApiArg = {
  search?: string;
  page?: number;
  size?: number;
  sortField?: string;
  sortDirection?: string;
};
export type GetAllOrByIdApiResponse = /** status 200 OK */ ResponseDto;
export type GetAllOrByIdApiArg = {
  id?: string;
};
export type FetchInventoryApiResponse = /** status 200 OK */ ResponseDto;
export type FetchInventoryApiArg = {
  id: string;
};
export type GetDeliveryDetailsByOrderIdApiResponse =
  /** status 200 OK */ ResponseDto;
export type GetDeliveryDetailsByOrderIdApiArg = {
  orderId?: string;
  deliveryId?: string;
};
export type GetEmployeeApiResponse = /** status 200 OK */ ResponseDto;
export type GetEmployeeApiArg = void;
export type DeleteApiV2DeleteDeliveryApiResponse =
  /** status 200 OK */ ResponseDto;
export type DeleteApiV2DeleteDeliveryApiArg = {
  deliveryId: string;
};
export type DeleteEmployeeApiResponse = /** status 200 OK */ ResponseDto;
export type DeleteEmployeeApiArg = {
  id: string;
};
export type ResponseDto = {
  message?: string;
  data?: object;
  statusCode?: number;
};
export type WorkOrderDto = {
  id?: string;
  employeeId?: string;
  orderId?: string;
  customerId?: string;
  startDate?: string;
  tentativeEndDate?: string;
  status?: string;
  createdBy?: string;
  updatedBy?: string;
  is_removed?: boolean;
};
export type VendorDto = {
  vendorName?: string;
  contactPerson?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  address?: string;
  createdBy?: string;
  updatedBy?: string;
};
export type SpecificationDto = {
  tagWidth?: number;
  tagHeight?: number;
  material?: string;
  letterColour?: string;
  letterHeight?: number;
  background?: string;
  thickness?: number;
  imageURL?: string;
};
export type QuotationDetailDto = {
  orderId?: string;
  customerId?: string;
  pricingId?: string;
};
export type PricingDto = {
  basePrice?: number;
  taxAmount?: number;
  discountAmount?: number;
  totalPrice?: number;
  createdBy?: string;
  updatedBy?: string;
};
export type OrderInformationDto = {
  orderName?: string;
  phoneNumber?: string;
  archived?: boolean;
  status?: string;
  orderConfirmed?: boolean;
  userId?: string;
  createdBy?: string;
  updatedBy?: string;
  orderNumber?: string;
  deleted?: boolean;
};
export type OrderWorkFlowDto = {
  loggedIn?: string;
  orderChecked?: boolean;
  productionProcessed?: boolean;
  qualityChecked?: boolean;
  deliveryInitiated?: boolean;
  notes?: string;
  createdBy?: string;
  updatedBy?: string;
  orderInformation?: string;
  is_removed?: boolean;
};
export type OrderDetailDto = {
  orderInformationId?: string;
  specificationId?: string;
  pricingId?: string;
  metaData?: string;
  quantity?: number;
  createdAt?: string;
};
export type Vendor = {
  id?: string;
  vendorName?: string;
  contactPerson?: string;
  phoneNumber?: string;
  email?: string;
  website?: string;
  address?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  isRemoved?: boolean;
};
export type Inventory = {
  id?: string;
  name?: string;
  rawMaterialType?: string;
  inStockQuantity?: number;
  vendor?: Vendor;
  isRemoved?: boolean;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
};
export type Employee = {
  id?: string;
  address1?: string;
  address2?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  phoneNumber?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
  organizationUserId?: string;
};
export type MaterialRequestDto = {
  inventory?: Inventory;
  employee?: Employee;
  vendor?: Vendor;
  requestStatus?: string;
  invoiceId?: number;
  createdBy?: string;
  updatedBy?: string;
};
export type InventoryDto = {
  name?: string;
  rawMaterialType?: string;
  inStockQuantity?: number;
  vendorId?: string;
  isRemoved?: boolean;
  createdBy?: string;
  updatedBy?: string;
};
export type PaginationDto = {
  pageNo?: number;
  pageSize?: number;
  fieldName?: string;
  direction?: "ASC" | "DESC";
};
export type OrderInformation = {
  id?: string;
  orderName?: string;
  phoneNumber?: string;
  archived?: boolean;
  status?: string;
  orderConfirmed?: boolean;
  orderConfirmedDate?: string;
  workOrderReady?: boolean;
  userId?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  orderNumber?: string;
  deleted?: boolean;
};
export type DeliveryDto = {
  deliveryAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  phoneNumber?: string;
  deliveryStatus?: string;
  trackingCompany?: string;
  shippingMethod?: string;
  estimatedDelivery?: string;
  cost?: number;
  trackingLink?: string;
  orderInformation?: OrderInformation;
  createdBy?: string;
  updatedBy?: string;
  isDeleted?: boolean;
};
export type EmployeeDto = {
  address1?: string;
  address2?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  phoneNumber?: string;
  email?: string;
  organizationUserId?: string;
};
export type CustomerDto = {
  address1?: string;
  address2?: string;
  state?: string;
  city?: string;
  zipcode?: string;
  phoneNumber?: string;
  email?: string;
  userId?: string;
  organizationUserId?: string;
};
export const {
  useDeleteWorkOrderMutation,
  useUpdateWorkOrderMutation,
  useGetVendorQuery,
  useUpdateVendorMutation,
  useDeleteVendorMutation,
  useChangeDeliveryStatusMutation,
  useGetSpecificationIdQuery,
  useUpdateSpecificationMutation,
  useDeleteSpecificationMutation,
  useDeleteOrderDetailMutation,
  useGetQuotationDetailByIdQuery,
  useUpdateQuotationDetailsMutation,
  useDeleteQuotationDetailMutation,
  useUpdatePricingMutation,
  useDeleteOrderMutation,
  useRetrieveOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrder1Mutation,
  useDeleteOrderWorkFlowMutation,
  useUpdateOrderWorkFlowMutation,
  useUpdateOrderDetailMutation,
  useEditMaterialMutation,
  useUpdateInventoryMutation,
  useDeleteInventoryMutation,
  useUpdateEmployeeMutation,
  useGetWorkOrderQuery,
  useCreateWorkOrderMutation,
  useGetVendorListQuery,
  useCreateVendorMutation,
  useGetSpecificationQuery,
  useSetSpecificationMutation,
  useGetQuotationDetailQuery,
  useCreateQuotationDetailMutation,
  useCreateOrderMutation,
  useGetOrderWorkFlowQuery,
  useCreateOrderWorkFlowMutation,
  useGetWorkOrder1Query,
  useCreateOrderDetailMutation,
  useGetInventoryQuery,
  useCreateInventoryMutation,
  useCreateMaterialMutation,
  useCreatePricingMutation,
  useCreateDeliveryMutation,
  useCreateEmployeeMutation,
  useCreateCustomerMutation,
  useRetrieveWorkOrderIdQuery,
  useSearchWorkOrderQuery,
  useSearchVendorQuery,
  useGetSpecificationInfoQuery,
  useSearchOrderDetailQuery,
  useGetQuotationDetail1Query,
  useGetPricingQuery,
  useGetOrdersQuery,
  useRetrieveOrderWorkFlowIdQuery,
  useSearchWorkOrder1Query,
  useGetAllOrByIdQuery,
  useFetchInventoryQuery,
  useGetDeliveryDetailsByOrderIdQuery,
  useGetEmployeeQuery,
  useDeleteApiV2DeleteDeliveryMutation,
  useDeleteEmployeeMutation,
} = injectedRtkApi;
