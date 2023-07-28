<script>
    export let footerData;
</script>
<div class="footer-container">
<div class="footer-section">
    <p>{footerData?.copyright}</p>
    <p>{footerData?.contact}</p>
</div>
</div>
<style>
    .footer-container{
        width: 100%;
        position:fixed;
        bottom: 0;
        background-color: rgb(140,140,140);
    }

    .footer-section {
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        margin: 0 auto;
    }
</style>