
  export interface IDataTypes {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: [
      {
        id: number;
        name: string;
        type: string;
        dimension: string;
        url: string;
        created: string;
        status: string;
        image: string;
      }
    ];
  }

  export interface IFilteredDataTypes {   
    
        id: number;
        name: string;
        type: string;
        dimension: string;
        url: string;
        created: string;
        status: string;
        image: string;
     
  }

  export interface IFiltredArray {
    [key: string]: IFilteredDataTypes;
  }

  