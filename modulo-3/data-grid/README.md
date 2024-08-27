# DataGrid de MUI (Material-UI)

Es un componente poderoso y flexible para mostrar y manejar grandes cantidades de datos en forma de tabla en aplicaciones React. Viene con muchas características listas para usar, como  

- Paginación: Soporte para paginación de datos tanto en el lado del cliente como en el lado del servidor.
- Ordenamiento: Permite ordenar columnas por valores ascendentes o descendentes.
- Filtrado: Incluye funcionalidades para filtrar datos en función de los valores de las columnas.
- Selección: Permite la selección de filas, ya sea simple o múltiple.
- Edición: Soporta edición en línea de celdas.
- Virtualización: Es capaz de manejar grandes volúmenes de datos con un rendimiento eficiente mediante   virtualización de filas.
- Columnas personalizables: Permite definir y personalizar las columnas con renderizadores, encabezados, y más.
- Integración con temas: Se integra bien con los temas personalizados de MUI.

Además, MUI ofrece dos variantes del DataGrid:

1. DataGrid: La versión gratuita, que incluye las funcionalidades básicas.
2. DataGridPro: Una versión premium que añade características avanzadas como agrupación, columnas dinámicas y un mayor rendimiento para datos a gran escala.

## Principales Props de DataGrid

- rows:

Descripción: Un array de objetos que representan los datos a mostrar en la tabla.
Tipo: Array<{ id: string | number; [key: string]: any }>
Ejemplo: [{ id: 1, name: 'John Doe', age: 25 }]

- columns:

Descripción: Un array de objetos que definen las columnas de la tabla, incluyendo el nombre, tipo y renderizado personalizado.
Tipo: Array<{ field: string; headerName: string; [key: string]: any }>
Ejemplo: [{ field: 'name', headerName: 'Name', width: 150 }]

- pageSize:

Descripción: Número de filas por página.
Tipo: number
Ejemplo: pageSize={5}

- rowsPerPageOptions:

Descripción: Array de opciones para el número de filas por página.
Tipo: number[]
Ejemplo: rowsPerPageOptions={[5, 10, 20]}

- pagination:

Descripción: Habilita o deshabilita la paginación.
Tipo: boolean
Ejemplo: pagination={true}

- checkboxSelection:

Descripción: Añade un checkbox en cada fila para seleccionar múltiples filas.
Tipo: boolean
Ejemplo: checkboxSelection={true}

- disableSelectionOnClick:

Descripción: Desactiva la selección de filas al hacer clic en una celda.
Tipo: boolean
Ejemplo: disableSelectionOnClick={true}

- sortingOrder:

Descripción: Define el orden de clasificación cuando se hace clic en el encabezado de una columna.
Tipo: Array<'asc' | 'desc'>
Ejemplo: sortingOrder={['asc', 'desc']}

- onRowClick:

Descripción: Función de callback que se ejecuta cuando se hace clic en una fila.
Tipo: (params: GridRowParams, event: MuiEvent<React.MouseEvent>) => void
Ejemplo: onRowClick={(params) => console.log(params.id)}

- onSelectionModelChange:

Descripción: Función de callback que se ejecuta cuando cambia la selección de filas.
Tipo: (selectionModel: GridSelectionModel) => void
Ejemplo: onSelectionModelChange={(newSelection) => console.log(newSelection)}

- loading:

Descripción: Muestra un indicador de carga en la tabla.
Tipo: boolean
Ejemplo: loading={true}

- autoHeight:

Descripción: Ajusta automáticamente la altura del DataGrid en función del contenido.
Tipo: boolean
Ejemplo: autoHeight={true}

- density:

Descripción: Controla la densidad de la visualización (espaciado entre filas).
Tipo: 'compact' | 'standard' | 'comfortable'
Ejemplo: density="compact"

- disableColumnFilter:

Descripción: Desactiva el filtrado en las columnas.
Tipo: boolean
Ejemplo: disableColumnFilter={true}

- disableColumnMenu:

Descripción: Oculta el menú de las columnas (ordenamiento, filtrado, ocultación).
Tipo: boolean
Ejemplo: disableColumnMenu={true}

- disableColumnSelector:

Descripción: Desactiva la opción de seleccionar/ocultar columnas desde el menú.
Tipo: boolean
Ejemplo: disableColumnSelector={true}

- disableExtendRowFullWidth:

Descripción: Desactiva la extensión de filas al ancho completo de la tabla.
Tipo: boolean
Ejemplo: disableExtendRowFullWidth={true}

- getRowId:

Descripción: Función para obtener un ID único para cada fila si el ID predeterminado no es id.
Tipo: (row: any) => string | number
Ejemplo: getRowId={(row) => row.customId}

- initialState:

Descripción: Define el estado inicial del DataGrid, como la página, selección, orden, etc.
Tipo: GridInitialStateCommunity
Ejemplo: { pagination: { page: 1 } }

- sortModel:

Descripción: Controla el ordenamiento inicial de las columnas.
Tipo: Array<{ field: string; sort: 'asc' | 'desc' }>
Ejemplo: sortModel={[{ field: 'name', sort: 'asc' }]}
