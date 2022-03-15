interface CharItem {
    id: number;
    name: string;
    type: string;
    dimension: string;
    url: string;
    created: string;
    status: string;
    imageUrl: string;
  }
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

  export interface IDataBrowserTypes {
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
  
  handleLoadMore: () => void;
}